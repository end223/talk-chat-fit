import TelegramBot from 'node-telegram-bot-api';
import OpenAI from 'openai';
import "dotenv/config";
import express from 'express';

// Configuração do servidor Express
const port = process.env.PORT;
const app = express();

// Configuração da API da OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API,
});

// Configuração do bot do Telegram
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

app.use(express.json());
app.post(`/webhook/${token}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
    bot.setWebHook(`https://URL_DO_WEBHOOK.herokuapp.com/webhook/${token}`);
    console.log(`Bot está rodando e ouvindo na porta ${port}`);
});

const userStates = {};

// Função para enviar mensagem
const userFeedbackMessages = {}; // Objeto para armazenar as mensagens de feedback por chat ID

// Função para enviar mensagem
async function sendMessage(chatId, text, options) {
    const message = await bot.sendMessage(chatId, text, options);
    return message.message_id;
}

// Função para atualizar mensagem
async function editMessage(chatId, messageId, text, options) {
    await bot.editMessageText(text, {
        chat_id: chatId,
        message_id: messageId,
        ...options,
    });
}

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    if (!userStates[chatId]) {
        const text = "Olá! 👋 Bem-vindo ao nosso assistente de condicionamento físico e nutrição. Como posso ajudar você hoje?";
        
        const keyboard = {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🥗 Nutrição", callback_data: "🥗 Nutrição" }],
                    [{ text: "🏋️ Condicionamento Físico", callback_data: "🏋️ Condicionamento Físico" }],
                    [{ text: "💬 Contato", callback_data: "💬 Contato" }],
                ],
            },
        };

        sendMessage(chatId, text, keyboard);
    }
});

bot.on("callback_query", async (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;

    if (data === "menu") {
        userStates[chatId] = undefined;

        editMessage(chatId, query.message.message_id, "Voltando ao menu principal...", {
            reply_markup: { inline_keyboard: [] },
        });

        const menuText = "Bem-vindo de volta ao menu! Selecione a opção que deseja:";
        const keyboard = {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🥗 Nutrição", callback_data: "🥗 Nutrição" }],
                    [{ text: "🏋️ Condicionamento Físico", callback_data: "🏋️ Condicionamento Físico" }],
                    [{ text: "💬 Contato", callback_data: "💬 Contato" }],
                ],
            },
        };

        sendMessage(chatId, menuText, keyboard);
    } else if (data === "💬 Contato") {
        editMessage(chatId, query.message.message_id, "" + data, {
            reply_markup: { inline_keyboard: [] },
        });

        sendMessage(chatId, "Para suporte ou contato por favor entre em contato com @cutegothvampire");
    } else {
        userStates[chatId] = data;

        editMessage(chatId, query.message.message_id, "" + data, {
            reply_markup: { inline_keyboard: [] },
        });

        const instruction = data === "🥗 Nutrição" ? "Faça uma pergunta sobre Nutrição:" : "Faça uma pergunta sobre Condicionamento Físico:";
        sendMessage(chatId, instruction);
    }
});

bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    const userState = userStates[chatId];

    if (text === "/start") {
        userStates[chatId] = undefined;
    } else if (text === "/menu") {
        userStates[chatId] = undefined;

        const menuText = "Bem-vindo de volta ao menu! Selecione a opção que deseja:";
        const keyboard = {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🥗 Nutrição", callback_data: "🥗 Nutrição" }],
                    [{ text: "🏋️ Condicionamento Físico", callback_data: "🏋️ Condicionamento Físico" }],
                    [{ text: "💬 Contato", callback_data: "💬 Contato" }],
                ],
            },
        };

        const messageId = await sendMessage(chatId, menuText, keyboard);

        if (userFeedbackMessages[chatId]) {
            delete userFeedbackMessages[chatId];
            bot.deleteMessage(chatId, userFeedbackMessages[chatId]);
        }

        userFeedbackMessages[chatId] = messageId;
    } else if (text === "/contato") {
        sendMessage(chatId, "Para suporte ou contato, por favor entre em contato com @cutegothvampire");
    } else if (userState === "🥗 Nutrição" || userState === "🏋️ Condicionamento Físico" || userState === "💬 Contato") {
        const feedbackMessageId = await sendMessage(chatId, "Digitando...");

        const aiResponse = await generateAIResponse(text, userState);

        // Atualiza a mensagem de feedback com a resposta gerada
        await editMessage(chatId, feedbackMessageId, aiResponse);
    }
});

async function generateAIResponse(inputMessage, userState) {
    let prompt;
    
    //Configuração de prompt personalizado    
    switch (userState) {
        case "🥗 Nutrição":
            prompt = "Pergunta sobre nutrição: " + inputMessage;
            break;
        case "🏋️ Condicionamento Físico":
            prompt = "Pergunta sobre condicionamento físico: " + inputMessage;
            break;
        default:
            prompt = "Pergunta: " + inputMessage;
            break;
    }

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message.content.trim();
}

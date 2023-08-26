//routes.js
import express from 'express';
import bot, { sendMessage, editMessage, generateAIResponse } from './bot.js';

const router = express.Router();

router.post('/webhook/${token}', (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

router.post('/message', async (req, res) => {
    const { chatId, text, userState, messageId } = req.body;

    if (userState === '💬 Contato') {
        await editMessage(chatId, messageId, '' + userState, {
            reply_markup: { inline_keyboard: [] },
        });
        await sendMessage(chatId, 'Para suporte ou contato por favor entre em contato com @cutegothvampire');
    } else {
        const feedbackMessageId = await sendMessage(chatId, 'Digitando...');
        const aiResponse = await generateAIResponse(text, userState);
        await editMessage(chatId, feedbackMessageId, aiResponse);
    }

    res.sendStatus(200);
});

export default router;
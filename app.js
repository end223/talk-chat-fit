// app.js
import express from 'express';
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import routes from './routes.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Bot está rodando e ouvindo na porta ${port}`);
    bot.setWebHook(`https://WEBHOOK_HEROKU.com/webhook/${token}`);
});

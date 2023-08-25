<a id="top"></a>

#

<h1 align="center">
Talk-Chat FIT 📱
</h1>

<p align="center"> 
<img title="" src="https://i.ibb.co/TKqRdq7/nutritionist-8214649-removebg-preview.png" alt="" width="339">
</p>

<p align="center">
Olá! 👋 Esse é um bot personalizado do Telegram que oferece assistência relacionada a condicionamento físico, nutrição.
</p>
<p align="center">
Ele usa a API da OpenAI para responder as dúvidas dos usuários.
</p>

<div align="center">
 
[![N|Solid](https://i.ibb.co/LgtYbbv/PR-News-Emblem-Open-AI.jpg)](https://platform.openai.com)
[![N|Solid](https://i.ibb.co/zFtpKSD/1.jpg)](https://t.me/botfather)
[![N|Solid](https://i.ibb.co/wCp8Kgv/photo-2023-08-24-18-48-47.jpg)](https://signup.heroku.com)
</div>

---

## 🌐 〢 Content

- [✨ Features](#features)
- [💻 Tech](#tech)
- [🌀 Fluxo de Conversa](#fluxo)
- [⚙️Installation](#installation)
- [📁 Setting up](#setup)
- [⚠️ Note](#note)

---

## ✨〢 Features

- Prompt personalizado.
- Respostas a perguntas sobre nutrição e condicionamento físico.
- Opções de menu para facilitar a interação.
- Suporte para contato com a equipe.

---

## 💻  〢 Tech

**Talk-Chat FIT** usa os seguintes projetos para funcionar:

- [NodeJS](https://nodejs.org/) - Evented I/O for the Backend
- [Express](https://expressjs.com/) - Fast Node.JS network app framework
- [dotenv](https://www.dotenv.org/) - A secrets manager for .env files.
- [OpenAI](https://github.com/openai/openai-node) - This library provides convenient access to the OpenAI REST API from TypeScript or JavaScript.
- [Telegram Bot API](https://www.npmjs.com/package/node-telegram-bot-api) - Telegram Bot API for NodeJS.

---

## 🌀  〢 Fluxo de Conversa

>O bot inicia respondendo ao comando /start, oferecendo opções de menu. 

O usuário pode escolher:

🥗 Nutrição;

🏋️ Condicionamento Físico.

>Quando uma opção é selecionada, o bot responde a perguntas relacionadas ao tópico escolhido.

---

## ⚙️  〢 Installation

**Talk-Chat FIT** requires:
>[Node.js](https://nodejs.org/) v18+ to run.

>[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli) - The Heroku Command Line Interface (CLI) is an essential part of using Heroku. With it, you can create and manage Heroku apps directly from the terminal.

`**Pre-requisites**` 🔧

>The Heroku CLI requires Git, the popular version control system. If you don’t have Git installed, complete:

>[Git installation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Navegue até a pasta do projeto e instale as dependencias:

```
npm install
npm init -y
npm i node-telegram-bot-api --save
npm i openai --save
npm i dotenv --save
npm i express --save
```

---

### 📁  〢 Setting Up: Keys
- Create a `.env`  file  and paste the code:

```
BOT_TOKEN="TELEGRAM_TOKEN"
OPEN_AI_API="OPEN_AI_KEY"
```

- Go to **[BotFather](https://t.me/BotFather)** on telegram, setup new bot with `/newbot` and add name to bot. 
- Copy the **token to access the HTTP API** and paste on ``"TELEGRAM_TOKEN"`` in `.env` file.
- Go to **[OpenAI](https://platform.openai.com)** sign or sign up and go to  **[View API keys](https://https://platform.openai.com/account/api-keys)**.

 <img title="" src="https://i.ibb.co/N714Mkv/openai.png" alt="" width="639">
 
- Setup new key and paste on ``"OPEN_AI_KEY"`` in `.env` file.

---

### 📁  〢 Setting Up: Heroku

- After create your account on **[Heroku](https://signup.heroku.com/)**, open `Git BASH` in folder and login on your Heroku Account:

```
heroku login
```

- Clone this repository, so you can deploy to Heroku, execute:
 
```
git clone URL
```
- Create an app on Heroku, which prepares Heroku to receive your source code, run:

```
heroku create
```
>_When you create an app, you also create a Git remote called heroku. It’s associated with your local Git repository._

>⚠️**IMPORTANT:** `After create your app you need to create a Procfile`: 
```
touch Procfile
```

`and setup the code on file`:

```
web: node index.js
```

- **Now go to [Heroku Apps Settings](https://dashboard.heroku.com/apps)**.
- Select your App.
- Go to Settings and copy your `Heroku Webhook`.

<img title="" src="https://i.ibb.co/YWcg3f5/photo-2023-08-24-22-35-25.jpg" alt="" width="639">

>**Paste on the code line**: 

<img title="" src="https://i.ibb.co/1KkX9rZ/heroku-webhook.png" alt="" width="639">

>**After configure Heroku Webhook, run**:

```
git add .
git commit -m Heroku Deploy App
git push heroku main
```
















---








## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```
<p align="center"><a href=#top>Back to Top</a></p>

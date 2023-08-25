<a id="top"></a>

#

<h1 align="center">
Talk-Chat FIT 📱
</h1>

<p align="center"> 
<img title="" src="https://i.ibb.co/TKqRdq7/nutritionist-8214649-removebg-preview.png" alt="" width="339">
</p>

<p align="center">
Olá! 👋 Este é um bot personalizado do Telegram que oferece assistência relacionada a condicionamento físico e nutrição.
</p>
<p align="center">
Ele utiliza a API da OpenAI para responder às dúvidas dos usuários.
</p>

<div align="center">
 
[![N|Solid](https://i.ibb.co/LgtYbbv/PR-News-Emblem-Open-AI.jpg)](https://platform.openai.com)
[![N|Solid](https://i.ibb.co/zFtpKSD/1.jpg)](https://t.me/botfather)
[![N|Solid](https://i.ibb.co/wCp8Kgv/photo-2023-08-24-18-48-47.jpg)](https://signup.heroku.com)
</div>

---

## 🌐  〢 Conteúdo

- [✨ Recursos](#features)
- [💻 Tecnologias](#tech)
- [🌀 Fluxo de Conversa](#fluxo)
- [⚙️ Instalação](#installation)
- [📁 Configuração: Keys](#setupkeys)
- [📁 Configuração: Heroku](#setupheroku)
- [🎉 Enjoy](#enjoy)
- [💬 Contato](#contact)

---
<a id="features"></a>

## ✨〢 Recursos

- Prompt personalizado.
- Respostas para perguntas sobre nutrição e condicionamento físico.
- Opções de menu para facilitar a interação.
- Suporte para entrar em contato com a equipe.

---
<a id="tech"></a>

## 💻  〢 Tecnologias

**Talk-Chat FIT** usa os seguintes projetos para funcionar:

- [NodeJS](https://nodejs.org/) - Evented I/O for the Backend
- [Express](https://expressjs.com/) - Fast Node.JS network app framework
- [dotenv](https://www.dotenv.org/) - A secrets manager for .env files.
- [OpenAI](https://github.com/openai/openai-node) - This library provides convenient access to the OpenAI REST API from TypeScript or JavaScript.
- [Telegram Bot API](https://www.npmjs.com/package/node-telegram-bot-api) - Telegram Bot API for NodeJS.

---
<a id="fluxo"></a>

## 🌀  〢 Fluxo de Conversa

>O bot inicia respondendo ao comando /start, oferecendo opções de menu. 

O usuário pode escolher:

🥗 Nutrição;

🏋️ Condicionamento Físico.

>Quando uma opção é selecionada, o bot responde a perguntas relacionadas ao tópico escolhido.

---
<a id="installation"></a>

## ⚙️  〢 Instalação

**Talk-Chat FIT** requer:
>[Node.js](https://nodejs.org/) v18+ para funcionar.

>[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli) - A Interface de Linha de Comando (CLI) do Heroku é uma parte essencial para usar o Heroku. Com ela, você pode criar e gerenciar aplicativos Heroku diretamente pelo terminal.

`**Pré-requisitos**` 🔧

>A CLI do Heroku requer o Git, um sistema popular de controle de versão. Se você não tiver o Git instalado, conclua:

>[Instalação do Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Navegue até a pasta do projeto e instale as dependências:

```
npm install
npm init -y
npm i node-telegram-bot-api --save
npm i openai --save
npm i dotenv --save
npm i express --save
```

---
<a id="setupkeys"></a>

### 📁  〢 Configuração: Chaves
- Crie um arquivo `.env` e cole o código:

```
BOT_TOKEN="TELEGRAM_TOKEN"
OPEN_AI_API="OPEN_AI_KEY"
```

- Vá para o **[BotFather](https://t.me/BotFather)** no Telegram, configure um novo bot com `/newbot` e adicione um nome para o bot. 
- Copie o **token para acessar a API HTTP** e cole-o em `"TELEGRAM_TOKEN"` no arquivo `.env`.
- Vá para o **[OpenAI](https://platform.openai.com)**, faça login ou cadastre-se e vá para **[Ver chaves da API](https://https://platform.openai.com/account/api-keys)**.

>📝**Observação**: **``Você precisa recarregar $5 (valor mínimo) para usar a Chave da API da OpenAI``**.

 <img title="" src="https://i.ibb.co/N714Mkv/openai.png" alt="" width="639">
 
- Configure a nova chave e cole em ``"OPEN_AI_KEY"`` no arquivo `.env`.

---
<a id="setupheroku"></a>

### 📁  〢 Configuração: Heroku

>📝**Observação**: **``O Heroku possui um Plano Gratuito, mas você precisa configurar um método de pagamento para usar o Heroku``**.

- Após criar sua conta no **[Heroku](https://signup.heroku.com/)**, abra o `Git BASH` na pasta e faça login na sua conta do Heroku:

```
heroku login
```

- Clone este repositório para que você possa implantá-lo no Heroku. Execute:
 
```
git clone URL
```
- Crie um aplicativo no Heroku, que prepara o Heroku para receber o source code. Execute:

```
heroku create
```
>_Quando você cria um aplicativo, também cria um remoto Git chamado "heroku". Ele está associado ao seu repositório Git local._

>⚠️**IMPORTANTE**: `Depois de criar o aplicativo, você precisa criar um Procfile`: 

```
touch Procfile
```

`e cole o código abaixo dentro do arquivo Procfile`:

```
web: node index.js
```

- **Agora vá para [Configurações do Heroku Apps](https://dashboard.heroku.com/apps)**.
- Selecione seu aplicativo.
- Vá para Configurações e copie seu `Webhook do Heroku`.

<img title="" src="https://i.ibb.co/YWcg3f5/photo-2023-08-24-22-35-25.jpg" alt="" width="639">

>**Cole na linha de código**:

<img title="" src="https://i.ibb.co/1KkX9rZ/heroku-webhook.png" alt="" width="639">

>**Depois de configurar o Webhook do Heroku, execute os comandos**:


```
git add .
git commit -m Heroku Deploy App
git push heroku main
```
---
<a id="done"></a>

>🎉**DONE**: **``Agora o Bot está rodando no servidor Heroku``**.


Para visualizar os Logs sobre seu aplicativo em execução, execute:

```
heroku logs --tail
```
O Heroku trata os logs como fluxos de eventos ordenados por tempo agregados dos fluxos de saída de todos os seus aplicativos e componentes do Heroku, fornecendo um único canal para todos os eventos.

---
<a id="enjoy"></a>

# 
<h1 align="center">
🎉  〢 Enjoy
</h1>

<h1 align="center">

---
<a id="contact"></a>

## 💬  〢 Contato

<a href="https://t.me/cutegothvampire">
  <img src="https://i.ibb.co/Z2bzy4R/logo-telegram-256.png" alt="Logo do Telegram" width="50">
</a>
</h1>

<p align="center"><a href=#top>Back to Top</a></p>

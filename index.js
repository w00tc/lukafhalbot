const TelegramApi = require('node-telegram-bot-api');
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const token = "5253031559:AAGte7Ox31ahEOV9JDfxW-2mA06B03HSvgU";

const bot = new TelegramApi(token, { polling: true });

bot.on('message', msg => {
    if(msg.text.includes("@luniela")) {
        bot.sendMessage(msg.chat.id, "Да, вы абсолютно правы", {reply_to_message_id: msg.message_id});
    }
});

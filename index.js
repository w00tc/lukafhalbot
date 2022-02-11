const TelegramApi = require('node-telegram-bot-api');

const token = "5253031559:AAGte7Ox31ahEOV9JDfxW-2mA06B03HSvgU";

const bot = new TelegramApi(token, { polling: true });

bot.on('message', msg => {
    if(msg.text.contains("@luniela")) {
        bot.sendMessage(msg.from.id, "Да, вы абсолютно правы", {reply_to_message_id: msg.message_id});
    }
});

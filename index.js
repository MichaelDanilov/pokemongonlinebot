const TelegramBot = require('node-telegram-bot-api');
const isPokemonGoUp = require('is-pokemon-go-up');

const token = process.env.TG_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, msg => {
  bot.sendMessage(msg.from.id, 'Try /ping for check Pokemon Go servers');
});

bot.onText(/\/ping/, msg => {
  isPokemonGoUp().then(result => { bot.sendMessage(msg.from.id, result); });
});

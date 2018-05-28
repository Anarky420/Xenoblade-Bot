const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", (message) => {
  if(message.content === 'Dunban Talent Art') {
    message.reply('Born In A World Of Strife, Against The Odds, We Choose To Fight, Blossom Dance!.');
  }
  if(message.content === 'Shulk Talent Art') {
    message.reply('Monado Lend Us Your Power');
  }
  if(message.content === 'Melia Talent Art') {
    message.reply('Manifest Yourself');
  }
  if(message.content === 'Sharla Talent Art') {
    message.reply('Gotta Cool Off);
  }
  if(message.content === 'Fiora Talent Art') {
    message.reply('Sword Drones!');
  }
if(message.content === 'Riki Talent Art') {
    message.reply('Riki Find Goodies');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

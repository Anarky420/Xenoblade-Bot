const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'What do you need to make a rainbow?') {
    	message.reply('cant have a rainbow without Reyn Baby!');
  	}
client.on('message', message => {
    if (message.content === 'Poor Reyn') {
    	message.reply('Reyn smelly Orluga');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

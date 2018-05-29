const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'What do you need to make a rainbow?') {
    	message.reply('You cant have a rainbow without Reyn Baby!');
  	}
});

client.on('message', message => {
    if (message.content === 'Dunban Talent Art') {
    	message.reply('Born in a world of strife, Against the odds, We choose to fight, Blossom Dance!');
  	}
});

client.on('message', message => {
    if (message.content === 'Shulk are you feeling it?') {
    	message.reply('Im Really Feeling it!');
  	}
});

client.on('message', message => {
    if (message.content === 'Tora what are you doing?') {
    	message.reply('Tora was just resting his eyes');
  	}
});

client.on('message', message => {
    if (message.content === 'Help') {
    	message.reply('If you need a list of commands, DM @Anarky420#3445');
  	}
});

client.on('message', message => {
    if (message.content === 'The Zekenator') {
    	message.reply('Falls...');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

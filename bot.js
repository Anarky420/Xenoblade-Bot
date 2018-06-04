const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'What do you need to make a rainbow?') {
    	message.channel.send('You cant have a rainbow without Reyn Baby!');
  	}
});

client.on('message', message => {
    if (message.content === 'Dunban Talent Art') {
    	message.channel.send('Born in a world of strife, Against the odds, We choose to fight, Blossom Dance!');
  	}
});

client.on('message', message => {
    if (message.content === 'Shulk are you feeling it?') {
    	message.channel.send('Im Really Feeling it!');
  	}
});

client.on('message', message => {
    if (message.content === 'Tora what are you doing?') {
    	message.channel.send('Tora was just resting his eyes');
  	}
});

client.on('message', message => {
    if (message.content === 'Help') {
    	message.channel.send('If you need a list of commands, DM @Anarky420#3445');
  	}
});

client.on('message', message => {
    if (message.content === 'The Zekenator') {
    	message.channel.send('Falls...');
  	}
});

client.on('message', message => {
    if (message.content === 'Hello') {
    	message.channel.send('Hello (:');
  	}
});

client.on('message', message => {
    if (message.content === 'That feeling when your bot has a higher role than you') {
    	message.channel.send('lel i got a higher role than my creator');
  	}
});

client.on('message', message => {
    if (message.content === 'Today...') {
    	message.channel.send('We used our powers, to fell a god, then, seize our destinies!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

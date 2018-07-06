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
    if (message.content === 'b') {
    	message.channel.send(' :b: ');
  	}
});

client.on('message', message => {
    if (message.content === 'Best Aegis') {
    	message.channel.send('https://vignette.wikia.nocookie.net/xenoblade/images/5/56/Mythra-portrait.png/revision/latest/scale-to-width-down/350?cb=20171222071213');
  	}
});

client.on('message', message => {
    if (message.content === 'Today...') {
    	message.channel.send('We used our powers, to fell a god, then, seize our destinies!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

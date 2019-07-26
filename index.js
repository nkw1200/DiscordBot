const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjAzMzgyOTE0NjEyMzMwNTAy.XTpZpg.3UBoMs8--94WQP5Seja82Fe_vHg';

const PREFIX = '!';

bot.on('message', msg=> {
   let args = msg.content.substring(PREFIX.length).split(" ");

   switch(args[0]) {
        case 'balance': 
            msg.reply('0');
        break;

        case 'roll':
            const embed = new Discord.RichEmbed()
            .setTitle(msg.author.username.concat('\'s roll'))
            .setColor(0xe839b3);
            msg.channel.send(embed);
        break;
        
   }
})

bot.login(token);
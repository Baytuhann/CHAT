const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send('**Lütfen Bekleyiniz !**').then(msg => {
        console.log(" [BOT YENIDEN BASLIYOR] ")
        process.exit(0);
    });
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 4 
};

exports.help = {
  name: 'restart', 
  description: 'Botu Yeniden Başlatır', 
  usage: 'restart' 
};

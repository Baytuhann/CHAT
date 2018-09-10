const Discord = require('discord.js');


exports.run = function(client, message, args) {
  const sayi = args.slice(0).join(' ');


  if(sayi.length < 1) {
      return message.reply("Silmem için bir miktar belirt")
  }else {
    message.channel.bulkDelete(100);
    message.channel.send("**" + sayi + "**adet mesaj silindi!").then(msg => {
        msg.delete("5000")
    });
  }

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permlvl: 3
};

exports.help = {
    name: 'sil',
    Description: '**100 adet mesaj siler**',
    usage: 'sil <miktar>'
};

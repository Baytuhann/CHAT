const Discord = require('discord.js');


exports.run = function(client, message, args) {
  const mesaj = args.slice(0).join(' ')
  if (mesaj < 1) {
      message.reply("Yazmam için bir şey belirt")
  } else {
      message.delete();
      message.channel.send(mesaj)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permlvl: 3
};

exports.help = {
    name: 'yaz',
    Description: 'Bota istediğinizi yazdırır',
    usage: 'yaz <messaj>'
};

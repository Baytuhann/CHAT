const Discord = require('discord.js');

const cevaplar = [
    "evet",
    "hayır",
    "belki",
    "olabilir",
    "daha sonra tekrardan sor",
    "ımkansız"

]
exports.run = function(client, message, args) {
   var soru = args.join(' ');
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   if(!soru) return message.reply('Bir Soru Sor. **Doğru Kullanım**: !8ball <soru>')
   else message.channel.send(cevap)

};

exports.conf = {
  enabled: true, 
  guildOnly: true,
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'Chat', 
  description: '',
  usage: 'Chat' 
};

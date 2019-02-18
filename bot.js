const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





client.on('message', msg => {
  if (msg.content === '2ping) {
    msg.reply('2pong');
  }
});







client.login('NTQ3MDYyNzk3NDM1OTI4NTc2.D0xTdw.4PpXk_397kpRo09yTMOIaHSaY1g');

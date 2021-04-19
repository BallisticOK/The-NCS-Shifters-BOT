const { TOKEN, PREFIX } = require("./commandbot/util/EvobotUtil");
const prefix = PREFIX;

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} Logged in with the name! Shard ID: ${client.shard.id}/${client.shard.count}`);
  console.log(client.shard);
});

client.on('message', msg => {

});

client.login(TOKEN);
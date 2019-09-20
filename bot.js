const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("624548566261825576")
setInterval(function() {
channel.send(`islam islam islam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
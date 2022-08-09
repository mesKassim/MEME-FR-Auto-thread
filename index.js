const Discord = require("discord.js");
const Client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS", "GUILD_INTEGRATIONS"]
});

const token = require("./token.json");

Client.on("ready", async () =>{
    console.log("bot opérationnel");
    Client.user.setStatus("online");
    Client.user.setActivity("MEME [FR]", {type: 'WATCHING'});

});

Client.on("messageCreate", message => {
  if (message.channel.id != '937027119882584094') return
  if (message.channel.type === 'GUILD_PUBLIC_THREAD') return
  if (message.channel.type === 'GUILD_PRIVATE_THREAD') return
  if (message.author.bot) return
  console.log ("autothread");
  message.startThread({
    name: 'si tu veux réagir au meme de au dessus, parle dans ce fil.',
    autoArchiveDuration: 10080,
    reason: 'test',
  });
});

Client.on("messageCreate", message => {
  if (message.channel.id != '937027120805347348') return
  if (message.channel.type === 'GUILD_PUBLIC_THREAD') return
  if (message.channel.type === 'GUILD_PRIVATE_THREAD') return
  if (message.author.bot) return
  console.log ("autothread");
  message.startThread({
    name: 'si tu veux réagir au meme de au dessus, parle dans ce fil.',
    autoArchiveDuration: 10080,
    reason: 'test',
  });
});

Client.on("messageCreate", message => {
  if (message.channel.id != '972240781727383622') return
  if (message.channel.type === 'GUILD_PUBLIC_THREAD') return
  if (message.channel.type === 'GUILD_PRIVATE_THREAD') return
  if (message.author.bot) return
  console.log ("autothread");
  message.startThread({
    name: 'si tu veux réagir au meme de au dessus, parle dans ce fil.',
    autoArchiveDuration: 10080,
    reason: 'test',
  });
});

Client.on("messageCreate", message => {
  if (message.channel.id != '970092251059470377') return
  if (message.channel.type === 'GUILD_PUBLIC_THREAD') return
  if (message.channel.type === 'GUILD_PRIVATE_THREAD') return
  if (message.author.bot) return
  console.log ("autothread");
  message.startThread({
    name: 'si tu veux réagir au meme de au dessus, parle dans ce fil.',
    autoArchiveDuration: 10080,
    reason: 'test',
  });
});

Client.on("messageCreate", message => {
  if (message.channel.id != '975003792359718952') return
  if (message.channel.type === 'GUILD_PUBLIC_THREAD') return
  if (message.channel.type === 'GUILD_PRIVATE_THREAD') return
  if (message.author.bot) return
  console.log ("autothread");
  message.startThread({
    name: 'si tu veux réagir au meme de au dessus, parle dans ce fil.',
    autoArchiveDuration: 10080,
    reason: 'test',
  });
});

Client.login(token.token);
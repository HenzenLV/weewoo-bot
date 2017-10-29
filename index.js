const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function()  {
    console.log("Ready");
});

bot.on("message", function(message) {

    bot.user.setStatus('dnd')

    bot.user.setPresence({ game: { name: '🔥 Burning Jews', type: 0 }       
                
});

if (message.content == "weewoo") 
    for (i = 1; i < 31; i++)
        message.channel.sendMessage("@everyone WEEWOO WE'RE GETTING RAIDED WEEWOO GET ONLINE AND HELP PATCH WALLS WEEWOO:exclamation:" + i + "'th alert.")

});

client.login(process.env.BOT_TOKEN);

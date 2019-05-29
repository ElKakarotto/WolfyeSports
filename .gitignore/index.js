const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Wolfy eSports, Aide : whelp");
    console.log("Wolfy eSports est en ligne :) !");
});

bot.login("NTgzMzQyMjM5OTA0ODI1MzY1.XO6-yQ.2iiqnLX6kydi2wF0QHaZEMGFBm8");

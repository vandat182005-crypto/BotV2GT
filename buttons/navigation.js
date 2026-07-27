const {
 ActionRowBuilder,
 ButtonBuilder,
 ButtonStyle
} = require("discord.js");


function dashboardButtons(){

return new ActionRowBuilder()
.addComponents(

new ButtonBuilder()
.setCustomId("seed")
.setLabel("🌱 Seed")
.setStyle(ButtonStyle.Success),

new ButtonBuilder()
.setCustomId("gift_code")
.setLabel("🎁 Code")
.setStyle(ButtonStyle.Primary),

new ButtonBuilder()
.setCustomId("event")
.setLabel("🎉 Event")
.setStyle(ButtonStyle.Secondary),

new ButtonBuilder()
.setCustomId("shop")
.setLabel("🛒 Shop")
.setStyle(ButtonStyle.Secondary),

new ButtonBuilder()
.setCustomId("admin")
.setLabel("👑 Admin")
.setStyle(ButtonStyle.Danger)

);

}


module.exports={
 dashboardButtons
};
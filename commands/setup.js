const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");


const {
    dashboardButtons
} = require("../buttons/dashboardButtons");



module.exports = {


data: new SlashCommandBuilder()

.setName("setup")

.setDescription(
    "Tạo Dashboard PlayTogether Hub"
),



async execute(interaction){



const embed = new EmbedBuilder()

.setColor("#00ff88")

.setTitle(
"🎮 PlayTogether Hub"
)

.setDescription(
`
━━━━━━━━━━━━━━━━━━━━

🌱 **Seed Tracker**

Theo dõi hạt giống theo thời gian thực


🎁 **Gift Code**

Code PlayTogether mới nhất


🎉 **Event**

Sự kiện đang diễn ra


🛒 **Shop**

Danh sách cửa hàng


━━━━━━━━━━━━━━━━━━━━


🟢 Bot Online

📡 Discord.js 14.27.0

⚡ Version 2.2.0


━━━━━━━━━━━━━━━━━━━━

🌱 🎁 🎉 🛒 👑

`
)

.setFooter({

text:
"PlayTogether Hub System"

});





return interaction.reply({

embeds:[
    embed
],


components:[

    dashboardButtons()

]


});



}


};
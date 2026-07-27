const {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");


module.exports = {


data: new SlashCommandBuilder()

.setName("dashboard")

.setDescription(
    "Mở bảng điều khiển PlayTogether Hub"
),




async execute(interaction, client){



const embed = new EmbedBuilder()

.setColor("#00ff88")

.setTitle("🎮 PlayTogether Hub")

.setDescription(
`
━━━━━━━━━━━━━━━━━━━━━━

🌱 **Seed Tracker**
Theo dõi hạt giống theo thời gian thực


🎁 **Gift Code**
Code PlayTogether mới nhất


🎉 **Event**
Sự kiện đang diễn ra


🛒 **Shop**
Danh sách cửa hàng


━━━━━━━━━━━━━━━━━━━━━━


🟢 **Bot Online**

📡 Discord.js 14.27.0

⚡ Version 3.0.0


━━━━━━━━━━━━━━━━━━━━━━


🌱 Seed   🎁 Code   🎉 Event   🛒 Shop   👑 Admin

`
)

.setFooter({

text:
"PlayTogether Hub • Community System"

})

.setTimestamp();





const buttons = new ActionRowBuilder()

.addComponents(


new ButtonBuilder()

.setCustomId(
"dashboard_seed"
)

.setLabel(
"🌱 Seed"
)

.setStyle(
ButtonStyle.Success
),




new ButtonBuilder()

.setCustomId(
"dashboard_code"
)

.setLabel(
"🎁 Code"
)

.setStyle(
ButtonStyle.Primary
),




new ButtonBuilder()

.setCustomId(
"dashboard_event"
)

.setLabel(
"🎉 Event"
)

.setStyle(
ButtonStyle.Secondary
),




new ButtonBuilder()

.setCustomId(
"dashboard_shop"
)

.setLabel(
"🛒 Shop"
)

.setStyle(
ButtonStyle.Secondary
),




new ButtonBuilder()

.setCustomId(
"dashboard_admin"
)

.setLabel(
"👑 Admin"
)

.setStyle(
ButtonStyle.Danger
)


);



await interaction.reply({

embeds:[
    embed
],

components:[
    buttons
]

});



}


};
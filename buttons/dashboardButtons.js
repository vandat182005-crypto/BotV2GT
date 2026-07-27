const {
ActionRowBuilder,
ButtonBuilder,
ButtonStyle
}=require("discord.js");



function dashboardButtons(){


return new ActionRowBuilder()

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


}


module.exports={

dashboardButtons

};
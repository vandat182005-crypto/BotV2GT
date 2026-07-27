const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");



function seedButtons(page = 1, totalPage = 1){


const row = new ActionRowBuilder();



row.addComponents(


new ButtonBuilder()

.setCustomId(
`seed_prev_${page}`
)

.setLabel(
"⬅️"
)

.setStyle(
ButtonStyle.Secondary
)

.setDisabled(
page <= 1
),



new ButtonBuilder()

.setCustomId(
`seed_refresh_${page}`
)

.setLabel(
"🔄"
)

.setStyle(
ButtonStyle.Success
),



new ButtonBuilder()

.setCustomId(
`seed_next_${page}`
)

.setLabel(
"➡️"
)

.setStyle(
ButtonStyle.Secondary
)

.setDisabled(
page >= totalPage
)


);



return [
    row
];


}



module.exports = {

seedButtons

};
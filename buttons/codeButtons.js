const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");



function codeButtons(){


return [

new ActionRowBuilder()

.addComponents(


new ButtonBuilder()

.setCustomId(
"code_add"
)

.setLabel(
"➕ Thêm Code"
)

.setStyle(
ButtonStyle.Success
),



new ButtonBuilder()

.setCustomId(
"code_edit"
)

.setLabel(
"✏️ Sửa Code"
)

.setStyle(
ButtonStyle.Primary
),



new ButtonBuilder()

.setCustomId(
"code_delete"
)

.setLabel(
"🗑️ Xóa Code"
)

.setStyle(
ButtonStyle.Danger
)


)

];


}



module.exports = {
    codeButtons
};
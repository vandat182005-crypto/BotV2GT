const {
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder
} = require("discord.js");


// =========================
// OPEN EDIT SEED MODAL
// =========================

function showEdit(interaction){


const modal = new ModalBuilder()

.setCustomId(
"seed_edit_modal"
)

.setTitle(
"✏️ Sửa thời gian Seed"
);



const seedId =
new TextInputBuilder()

.setCustomId(
"seed_id"
)

.setLabel(
"ID Seed (key)"
)

.setPlaceholder(
"Ví dụ: Strawberry"
)

.setStyle(
TextInputStyle.Short
)

.setRequired(true);



const time =
new TextInputBuilder()

.setCustomId(
"seed_time"
)

.setLabel(
"Thời gian (giây)"
)

.setPlaceholder(
"Ví dụ: 3600"
)

.setStyle(
TextInputStyle.Short
)

.setRequired(true);



modal.addComponents(

new ActionRowBuilder()
.addComponents(seedId),


new ActionRowBuilder()
.addComponents(time)

);



return interaction.showModal(
    modal
);


}





// =========================
// DELETE SEED MODAL
// =========================

function showDelete(interaction){


const modal = new ModalBuilder()

.setCustomId(
"seed_delete_modal"
)

.setTitle(
"🗑️ Xóa Seed"
);



const seedId =
new TextInputBuilder()

.setCustomId(
"seed_delete_id"
)

.setLabel(
"ID Seed cần xóa"
)

.setPlaceholder(
"Ví dụ: Strawberry"
)

.setStyle(
TextInputStyle.Short
)

.setRequired(true);



modal.addComponents(

new ActionRowBuilder()
.addComponents(seedId)

);



return interaction.showModal(
    modal
);


}





module.exports = {

showEdit,

showDelete

};
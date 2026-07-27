const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
}=require("discord.js");


function adminButtons(){

return new ActionRowBuilder()

.addComponents(

new ButtonBuilder()
.setCustomId("admin_seed_edit")
.setLabel("✏️ Sửa Seed")
.setStyle(ButtonStyle.Primary),


new ButtonBuilder()
.setCustomId("admin_seed_delete")
.setLabel("🗑️ Xóa Seed")
.setStyle(ButtonStyle.Danger),


new ButtonBuilder()
.setCustomId("admin_seed_reset")
.setLabel("🔄 Reset")
.setStyle(ButtonStyle.Secondary)

);

}


module.exports={
adminButtons
};
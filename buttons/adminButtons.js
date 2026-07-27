const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");



function adminButtons(){


    const row1 = new ActionRowBuilder()
        .addComponents(

            new ButtonBuilder()
            .setCustomId("admin_seed_edit")
            .setLabel("✏️ Sửa thời gian hạt")
            .setStyle(ButtonStyle.Primary),


            new ButtonBuilder()
            .setCustomId("admin_seed_delete")
            .setLabel("🗑️ Xóa hạt")
            .setStyle(ButtonStyle.Danger),


            new ButtonBuilder()
            .setCustomId("admin_seed_reset")
            .setLabel("🔄 Reset hạt")
            .setStyle(ButtonStyle.Secondary)

        );




    const row2 = new ActionRowBuilder()
        .addComponents(


            new ButtonBuilder()
            .setCustomId("code_add")
            .setLabel("➕ Thêm Code")
            .setStyle(ButtonStyle.Success),



            new ButtonBuilder()
            .setCustomId("code_edit")
            .setLabel("✏️ Sửa Code")
            .setStyle(ButtonStyle.Primary),



            new ButtonBuilder()
            .setCustomId("code_delete")
            .setLabel("🗑️ Xóa Code")
            .setStyle(ButtonStyle.Danger)


        );




    return [

        row1,
        row2

    ];

}



module.exports = {

    adminButtons

};
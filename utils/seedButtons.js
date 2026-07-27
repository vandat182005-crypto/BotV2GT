const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");

module.exports = function createSeedButtons(page, totalPages) {

    return new ActionRowBuilder().addComponents(

        new ButtonBuilder()
            .setCustomId(`seed_prev_${page}`)
            .setEmoji("⬅️")
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(page <= 1),

        new ButtonBuilder()
            .setCustomId("home")
            .setEmoji("🏠")
            .setLabel("Home")
            .setStyle(ButtonStyle.Primary),

        new ButtonBuilder()
            .setCustomId("seed_refresh")
            .setEmoji("🔄")
            .setLabel("Refresh")
            .setStyle(ButtonStyle.Success),

        new ButtonBuilder()
            .setCustomId(`seed_next_${page}`)
            .setEmoji("➡️")
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(page >= totalPages)

    );

};
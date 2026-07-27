const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");

module.exports = function navigationButtons() {

    return [

        new ActionRowBuilder().addComponents(

            new ButtonBuilder()
                .setCustomId("seed")
                .setEmoji("🌱")
                .setLabel("Seed")
                .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
                .setCustomId("code")
                .setEmoji("🎁")
                .setLabel("Code")
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId("event")
                .setEmoji("🎉")
                .setLabel("Event")
                .setStyle(ButtonStyle.Danger),

            new ButtonBuilder()
                .setCustomId("shop")
                .setEmoji("🛒")
                .setLabel("Shop")
                .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
                .setCustomId("admin")
                .setEmoji("👑")
                .setLabel("Admin")
                .setStyle(ButtonStyle.Secondary)

        )

    ];

};
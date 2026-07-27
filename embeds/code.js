const { EmbedBuilder } = require("discord.js");


module.exports = function codeEmbed(){

    return new EmbedBuilder()

        .setColor("#00ff00")

        .setTitle("🎁 Code Play Together")

        .setDescription(
            "📌 Danh sách code mới nhất\n\n" +
            "Chưa có code mới."
        )

        .setTimestamp();

};
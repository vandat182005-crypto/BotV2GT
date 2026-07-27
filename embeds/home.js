const {
    EmbedBuilder,
    AttachmentBuilder
} = require("discord.js");

const navigationButtons = require("../utils/navigationButtons");

module.exports = function createHomeEmbed() {

    const embed = new EmbedBuilder()

        .setColor("#5865F2")

        .setTitle("🎮 PLAYTOGETHER HUB")

        .setDescription(
`Chào mừng bạn đến với **PlayTogether Hub**.

🌱 **Seed Tracker**
Theo dõi thời gian hạt giống.

🎁 **Gift Code**
Quản lý code mới nhất.

🎉 **Event**
Cập nhật sự kiện.

🛒 **Shop**
Thông tin cửa hàng.

━━━━━━━━━━━━━━━━━━

🟢 Trạng thái: Online
📦 Version: V3.0.0
⚡ Discord.js: 14.27.0`
        )

        .setFooter({
            text: "Powered by PlayTogether Hub"
        })

        .setTimestamp();


    const banner = new AttachmentBuilder(

        "./assets/banner.png",

        {
            name: "banner.png"
        }

    );


    embed.setImage(
        "attachment://banner.png"
    );


    return {

        embeds: [embed],

        files: [banner],

        components: navigationButtons()

    };

};
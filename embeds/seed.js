const { EmbedBuilder } = require("discord.js");

const { getPage } = require("../services/seedService");

const formatTime = require("../utils/formatTime");
const getRemainTime = require("../utils/getRemainTime");

module.exports = function createSeedEmbed(page = 1) {

    const data = getPage(page);

    let description = "";

    for (const seed of data.items) {

        let remain = "Chưa đặt";

        if (seed.nextReset > 0) {

            remain = formatTime(
                getRemainTime(seed.nextReset)
            );

        }

        description +=
`${seed.emoji} **${seed.name}**
> ⏳ **${remain}**

`;

    }

    if (!description.length) {

        description = "Không có dữ liệu.";

    }

    return new EmbedBuilder()

        .setColor("#57F287")

        .setTitle("🌱 PLAY TOGETHER • SEED TRACKER")

        .setDescription(description)

        .addFields(
            {
                name: "📄 Trang",
                value: `${data.page}/${data.totalPages}`,
                inline: true
            },
            {
                name: "📦 Tổng hạt",
                value: `${data.items.length}`,
                inline: true
            },
            {
                name: "🟢 Trạng thái",
                value: "Đang hoạt động",
                inline: true
            }
        )

        .setFooter({

            text: "PlayTogether Hub"

        })

        .setTimestamp();

};
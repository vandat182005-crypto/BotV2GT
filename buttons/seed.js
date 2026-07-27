const createSeedEmbed = require("../embeds/seed");
const createSeedButtons = require("../utils/seedButtons");
const { getPage } = require("../services/seedService");

module.exports = {

    async execute(interaction) {

        const id = interaction.customId;

        // Refresh
        if (id === "seed_refresh") {

            const data = getPage(1);

            return interaction.update({
                embeds: [
                    createSeedEmbed(1)
                ],
                components: [
                    createSeedButtons(
                        data.page,
                        data.totalPages
                    )
                ]
            });

        }

        // Previous
        if (id.startsWith("seed_prev_")) {

            let page = Number(id.split("_")[2]);

            page--;

            const data = getPage(page);

            return interaction.update({
                embeds: [
                    createSeedEmbed(data.page)
                ],
                components: [
                    createSeedButtons(
                        data.page,
                        data.totalPages
                    )
                ]
            });

        }

        // Next
        if (id.startsWith("seed_next_")) {

            let page = Number(id.split("_")[2]);

            page++;

            const data = getPage(page);

            return interaction.update({
                embeds: [
                    createSeedEmbed(data.page)
                ],
                components: [
                    createSeedButtons(
                        data.page,
                        data.totalPages
                    )
                ]
            });

        }

    }

};
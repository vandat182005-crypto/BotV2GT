const { REST, Routes } = require("discord.js");
const logger = require("./logger");

module.exports = async function registerCommands(client) {

    const commands = [];

    client.commands.forEach(command => {
        commands.push(command.data.toJSON());
    });

    const rest = new REST({
        version: "10"
    }).setToken(process.env.TOKEN);

    try {

        logger.info("🔄 Đăng ký Slash Commands...");

        await rest.put(
            Routes.applicationCommands(client.user.id),
            {
                body: commands
            }
        );

        logger.success(
            "Slash",
            `${commands.length} Commands`
        );

    }

    catch (err) {

        logger.error(
            "Đăng ký Slash Commands thất bại",
            err
        );

    }

};
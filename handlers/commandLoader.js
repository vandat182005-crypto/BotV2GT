const fs = require("fs");
const path = require("path");
const logger = require("./logger");

module.exports = function loadCommands(client) {

    const folder = path.join(__dirname, "..", "commands");

    if (!fs.existsSync(folder)) {
        logger.warn("⚠ Không tìm thấy thư mục commands");
        return;
    }

    const files = fs
        .readdirSync(folder)
        .filter(file => file.endsWith(".js"));

    for (const file of files) {

        logger.loading("Command", file);

        try {

            const command = require(path.join(folder, file));

            if (!command.data || !command.execute) {

                logger.error(`${file} không hợp lệ`);
                continue;

            }

            client.commands.set(
                command.data.name,
                command
            );

            logger.success("Command", file);

        }

        catch (err) {

            logger.error(
                `Không thể load ${file}`,
                err
            );

        }

    }

};
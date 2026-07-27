const fs = require("fs");
const path = require("path");
const logger = require("./logger");

module.exports = function loadEvents(client) {

    const folder = path.join(__dirname, "..", "events");

    if (!fs.existsSync(folder)) {

        logger.warn("⚠ Không tìm thấy thư mục events");

        return;

    }

    const files = fs
        .readdirSync(folder)
        .filter(file => file.endsWith(".js"));

    for (const file of files) {

        logger.loading("Event", file);

        try {

            const event = require(path.join(folder, file));

            if (!event.name || !event.execute) {

                logger.error(`${file} không hợp lệ`);

                continue;

            }

            if (event.once) {

                client.once(
                    event.name,
                    (...args) => event.execute(...args, client)
                );

            } else {

                client.on(
                    event.name,
                    (...args) => event.execute(...args, client)
                );

            }

            logger.success("Event", file);

        }

        catch (err) {

            logger.error(
                `Không thể load ${file}`,
                err
            );

        }

    }

};
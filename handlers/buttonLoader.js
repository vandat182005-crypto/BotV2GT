const logger = require("./logger");

module.exports = function loadButtons(client) {

    try {

        client.buttons = require("../buttons");

        logger.success(
            "Buttons",
            "index.js"
        );

    }

    catch (err) {

        logger.error(
            "Không thể load Buttons",
            err
        );

    }

};
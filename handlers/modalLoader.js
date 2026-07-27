const logger = require("./logger");

module.exports = function loadModals(client) {

    try {

        client.modals = require("../modals");

        logger.success(
            "Modals",
            "index.js"
        );

    }

    catch (err) {

        logger.error(
            "Không thể load Modals",
            err
        );

    }

};
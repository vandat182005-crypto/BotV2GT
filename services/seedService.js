const fs = require("fs");
const path = require("path");

const SEEDS_PATH = path.join(__dirname, "../data/seeds.json");
const TIMERS_PATH = path.join(__dirname, "../data/timers.json");

const PER_PAGE = 10;

function readJSON(file, fallback = {}) {
    try {
        return JSON.parse(fs.readFileSync(file, "utf8"));
    } catch (err) {
        console.error(`❌ Không đọc được ${path.basename(file)}`);
        return fallback;
    }
}

function getSeeds() {
    return readJSON(SEEDS_PATH, []);
}

function getTimers() {
    return readJSON(TIMERS_PATH, {});
}

function getSeedList() {

    const seeds = getSeeds();
    const timers = getTimers();

    return seeds.map(seed => {

        const timer = timers[seed.key] || {};

        return {
            key: seed.key,
            emoji: seed.emoji,
            name: seed.name,
            nextReset: timer.nextReset || 0
        };

    });

}

function getPage(page = 1) {

    const list = getSeedList();

    const totalPages = Math.max(
        1,
        Math.ceil(list.length / PER_PAGE)
    );

    page = Number(page);

    if (isNaN(page)) page = 1;

    if (page < 1) page = 1;

    if (page > totalPages) page = totalPages;

    const start = (page - 1) * PER_PAGE;

    const items = list.slice(start, start + PER_PAGE);

    return {
        page,
        totalPages,
        items
    };

}

module.exports = {

    getSeeds,

    getTimers,

    getSeedList,

    getPage

};
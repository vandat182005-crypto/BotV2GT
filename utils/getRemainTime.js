module.exports = function getRemainTime(nextReset) {

    const remain = nextReset - Date.now();

    return remain > 0 ? remain : 0;

};
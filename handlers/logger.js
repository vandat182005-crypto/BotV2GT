const COLORS = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    magenta: "\x1b[35m",
    gray: "\x1b[90m"
};

function line() {
    console.log(`${COLORS.gray}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}`);
}

function title(name, version) {
    line();
    console.log(`${COLORS.cyan}🎮 ${name}${COLORS.reset}`);
    console.log(`${COLORS.yellow}Version ${version}${COLORS.reset}`);
    line();
}

function loading(type, file) {
    console.log(`${COLORS.yellow}📄 ${type.padEnd(10)} ${file}${COLORS.reset}`);
}

function success(type, file) {
    console.log(`${COLORS.green}✔ ${type.padEnd(10)} ${file}${COLORS.reset}`);
}

function info(message) {
    console.log(`${COLORS.cyan}${message}${COLORS.reset}`);
}

function warn(message) {
    console.log(`${COLORS.yellow}${message}${COLORS.reset}`);
}

function error(message, err) {
    console.log(`${COLORS.red}${message}${COLORS.reset}`);

    if (err) {
        console.error(err);
    }
}

module.exports = {
    title,
    line,
    loading,
    success,
    info,
    warn,
    error
};
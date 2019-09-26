const { IP,
    PORT,
    MOVE_UP_KEY,
    MOVE_RIGHT_KEY,
    MOVE_DOWN_KEY,
    MOVE_LEFT_KEY,
    NAME } = require(`./constants`)
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;
const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', (data) => { handleUserInput(data) });
    return stdin;
}
const handleUserInput = function () {
    process.stdin.on('data', (key) => {
        if (key === '\u0003') {
            console.log(`Terminal session closed`)
            process.exit();
        }
        if (key === 'w') {
            connection.write(MOVE_UP_KEY)
        }
        if (key === 'a') {
            connection.write(MOVE_LEFT_KEY)
        }
        if (key === 's') {
            connection.write(MOVE_DOWN_KEY)
        }
        if (key === 'd') {
            connection.write(MOVE_RIGHT_KEY)
        }
        if (key === "f") {
            connection.write("Say: :-)")
        }
    })
};
module.exports = {
    setupInput
};
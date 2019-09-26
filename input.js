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
    const handleUserInput = stdin.on('data', (key) => {
        if (key === '\u0003') {
            console.log(`Terminal session closed`)
            process.exit();
        }
        if (key === 'w') {
            conn.write('Move: up')
        }
        if (key === 'a') {
            conn.write('Move: left')
        }
        if (key === 's') {
            conn.write('Move: down')
        }
        if (key === 'd') {
            conn.write('Move: right')
        }
    }); return stdin;
}

module.exports = {
    setupInput
};
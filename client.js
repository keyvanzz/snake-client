//Establishes connection with the game server
const net = require('net');
const connect = function () {
    const conn = net.createConnection({
        host: '192.168.88.254',
        port: 50541
    });
    // interpret incoming data as text
    conn.setEncoding('utf8');
    conn.on('data', (data) => {
        console.log('Server says: ', data);
    });

    conn.on('connect', () => {
        console.log("Successfully connected to game server");
        conn.write(`Name: K1z`)
    })

    return conn;
}

module.exports = {
    connect
};
const net = require('net');
const connect = function () {
    const conn = net.createConnection({
        host: 'localhost',
        port: 50541
    });
    conn.on('data', (data) => {
        console.log('Server says: ', data);
    });
    conn.setEncoding('utf8');
    conn.on('connect', () => {
        console.log('Successfully connected to game server');
        conn.write('Name: k1z');
        // setInterval(() => {
        //     conn.write('Move: up');
        // }, 1000);
        // setInterval(() => {
        //     conn.write('Move: right');
        // }, 300);
        // setInterval(() => {
        //     conn.write('Move: down');
        // }, 500);
        // setInterval(() => {
        //     conn.write('Move: left');
        // }, 700);
        // setInterval(() => {
        //     conn.write('Move: up');
        // }, 900);
    });
    return conn;
}
module.exports = { connect }
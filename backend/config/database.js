const mysql = require("mysql");

const Connection = mysql.createPool({
    host: "127.0.0.1",
    user: "admin",
    password: "abc123abc",
    database: "jksa"
});

module.exports = Connection;
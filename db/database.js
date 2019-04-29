'use strict';

var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "ch_restaurant"
});

conn.connect(function(err) {
    if (err) throw err;
});

module.exports = conn;

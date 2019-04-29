const express = require('express'),
app = express();
bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "ch_restaurant"
});

// come back to this
// app.use(express.static(__dirname + '/public'));

conn.connect();

app.listen(3000, () => {
    console.log('Server is listening at port 3000');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/approutes'); //importing route
routes(app); //register the route



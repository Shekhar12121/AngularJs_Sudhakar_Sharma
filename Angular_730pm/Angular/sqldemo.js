var mysql = require("mysql");

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'DemoDb'
});

connection.connect(function (err) {
    if(!err)
    {
        console.log("Connected");

    }
    else
    {
        console.log(err);
    }
});
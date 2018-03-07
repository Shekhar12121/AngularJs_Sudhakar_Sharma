var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'DemoDb'
});
connection.connect();
var product={
    ProductId:5,
    Name:'Car Sunshade',
    Price:4000,
    Manufactured:new Date('12 January 2016')
};
var query = connection.query('insert into tblproducts set ?', product , function (err, result) {
    if(err)
    {
        console.error(err);
        return;
    }
    console.error(result);
});
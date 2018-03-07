// Import Required Modules

var express = require("express");
var mysql =  require("mysql");
var bodyParser = require('body-parser');


// Create Instance to access modules
var app=express();

// Declare Static Folder
app.use(express.static("Mean"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.redirect('/index.html');
})

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'DemoDb'
});
connection.connect(function (err) {
    if(!err)
    {
        console.log('Connected..');
    }
    else
    {
        console.log(err);
    }
})
app.get('/getAllProducts', function (req, res) {
    connection.query("Select * from tblProducts", function (error,rows,fields) {
        if(!error)
        {
            res.send(rows);
        }
        else
        {
            console.log('Problem in Query');
        }
    })
})
app.get("/getDetails/:ProductId", function (req, res) {
    connection.query("Select * from tblProducts Where ProductId=?", [req.params.ProductId], function (error, row, fields) {
        if(!error)
        {
            res.send(row);
        }
        else
        {
            console.log('Error in Query');
        }
    })
})
app.post("/addProduct",function (req, res) {

    var data = {
        ProductId:req.body.ProductId,
        Name:req.body.Name,
        Price:req.body.Price,
        Manufactured:new Date(req.body.Manufactured)
    };

   connection.query('Insert Into tblProducts SET ?',data, function (err) {
        if(!err)
        {
            console.log('Record Inserted..');
        }
        else
        {
            console.log(err);
        }
    })
 })

app.put('/updateProducts', function (req, res) {
    connection.query('UPDATE `tblproducts` SET `Name`=?,`Price`=?, `Manufactured=?, where `ProductId`=?', [req.body.Name, req.body.Price, req.body.Manufactured , req.body.ProductId], function (error, results, fields) {
       if(!error)
       {
           console.log('Record Updated');
       }
       else
       {
           console.log(error);
       }
    });
});

app.delete('/deleteProducts', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `tblproducts` WHERE `ProductId`=?', [req.body.ProductId], function (error, results, fields) {
        if(!error)
            console.log('Record Deleted..')
    });
});


app.listen(8080);
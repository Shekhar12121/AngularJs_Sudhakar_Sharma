var express = require("express");
var app=express();

app.get('/', function (req, res) {
    console.log('Index Page Sent');
    res.send("Products Index Page");
})

app.get('/Details', function (req, res) {
    console.log('Product Details Sent');
    res.send("Products Details Page");
})

app.get('/m*e', function (req, res) {
    console.log('Custom Pattern');
    res.send('Mobile Product Details..');
})

app.post('/AddProduct',function (req, res) {
    console.log('Insert Product');
    res.send('Product Inserted');
})

app.put('/UpdateProduct',function (req, res) {
    console.log('Edit Product');
    res.send('Product Modified');
})

app.delete('/DeleteProduct',function (req, res) {
    console.log('Delete Product');
    res.send('Product Deleted Successfully..');
})

var server = app.listen(8080, function () {
    var port= server.address().port;
    console.log('Server Started at Port :' + port);
});
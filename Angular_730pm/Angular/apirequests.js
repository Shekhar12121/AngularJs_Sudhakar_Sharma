var express = require("express");
var app=express();

app.get('/', function (req, res) {
    console.log('Site Home');
    res.send('Site Home Page')
})

app.static('PartialViews');

app.get('/productsList', function (req, res) {
    console.log('Products Index Page Rendered..');
})

app.get('/Details/ProductId', function (req, res) {
    console.log('Product Details Page..');
})
app.post('/addProduct', function (req, res) {
    console.log('Insert a new product from this page');
})
app.put('/updateProduct', function (req, res) {
    console.log('Edit Product Page..');
})
app.delete('/deleteProduct', function (req, res) {
    console.log('Product will be deleted..');
})

var server = app.listen(8080, function (req, res) {
    console.log('Server Started..');
})

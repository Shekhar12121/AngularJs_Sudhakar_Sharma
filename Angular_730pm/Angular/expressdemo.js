var express = require("express");
var app=express();

app.get('/',function (req, res) {
    res.send('This is Root of Website');
})
app.get('/Details', function (req, res) {
    res.send('This is Details Page');
})
var server = app.listen(8080, function () {
    console.log('Server Started');
});

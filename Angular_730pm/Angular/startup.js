var express = require("express");
var app = express();

app.use(express.static("CRUD"));


app.get("/",function (req,res) {
    res.redirect("/index.html");
})
app.listen(8080);
console.log('Server Started');
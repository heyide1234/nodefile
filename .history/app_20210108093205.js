var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send("hi! wellcome YiHe_NodeServer")
});
app.post("/upload", function (req, res) {
    res.send("hi!r")
    var exec = require('child_process').exec;
    exec('explorer.exe /select,"D:\\Mongodb"')
});
app.listen(3001, function () {
    console.log("app is listening at post 3001...")
});
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send("hi! wellcome YiHe_NodeServer")
});
var multer = require('multer');
// var upload = multer({ dest: "uploads/" }).single('avatar');

app.post('/upload', function (req, res) {
    console.log(".........", req.body)
    // upload(req, res, function (err) {
    //     console.log("....", req)
    //     if (err) {
    //         console.log(req.body);   //打印请求体
    //         console.log(req.file);
    //         // An error occurred when uploading
    //         return
    //     }

    //     // Everything went fine
    // })
})
app.post("/uploads", function (req, res) {
    // res.send("hi!r")
    // var exec = require('child_process').exec;
    // exec('explorer.exe /select,"c:"')
});
app.listen(3001, function () {
    console.log("app is listening at post 3001...")
});
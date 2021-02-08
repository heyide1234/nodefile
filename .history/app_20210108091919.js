var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send("hi!")
});
app.listen(3001, function () {
    console.log("app is listening at post 3001")
})
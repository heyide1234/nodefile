var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send("hi! wellcome YiHe_NodeServer")
});
var multiparty = require('multiparty');
var fs = require('fs');
// var upload = multer({ dest: "uploads/" }).single('avatar');

app.post('/upload', function (req, res) {
    /* 生成multiparty对象，并配置上传目标路径 */
    var form = new multiparty.Form();
    /* 设置编辑 */
    form.encoding = 'utf-8';
    //设置文件存储路劲
    form.uploadDir = './public/upload';
    //设置文件大小限制
    form.maxFilesSize = 2 * 1024 * 1024;
    // form.maxFields = 1000;  //设置所有文件的大小总和
    //上传后处理
    form.parse(req, function (err, fields, files) {
        var filesTemp = JSON.stringify(files, null, 2);
        if (err) {
            console.log('parse error:' + err);
        } else {
            console.log('parse files:' + filesTemp);
            var inputFile = files.inputFile[0];
            var uploadedPath = "./public/upload";
            var dstPath = "123";
            //重命名为真实文件名
            fs.rename(uploadedPath, dstPath, function (err) {
                if (err) {
                    console.log('rename error:' + err);
                } else {
                    console.log('rename ok');
                }
            })
        }
        // res.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' });
        // res.write('received upload:\n\n');
        // res.end(util.inspect({ fields: fields, files: filesTemp }))
    })
})

app.listen(3001, function () {
    console.log("app is listening at post 3001...")
});


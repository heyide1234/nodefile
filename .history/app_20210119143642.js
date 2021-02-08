var express = require("express");
var app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
    next();
});

app.get("/", function (req, res) {
    res.send("hi! wellcome YiHe_NodeServer")
});


var multiparty = require('multiparty');

var fs = require('fs');
// var upload = multer({ dest: "uploads/" }).single('avatar');

app.post('/upload', function (req, res) {
    /* 生成multiparty对象，并配置上传目标路径 */
    var dsrc = path.join(__dirname, "/public", "/upload/");
    // console.log(dsrc)
    var form = new multiparty.Form();
    /* 设置编辑 */
    form.encoding = 'utf-8';
    //设置文件存储路劲
    form.uploadDir = dsrc;
    //设置文件大小限制
    form.maxFilesSize = 2 * 1024 * 1024;
    // form.maxFields = 1000;  //设置所有文件的大小总和
    //上传后处理
    try {


        form.parse(req, function (err, fields, files) {

            var dstPath;
            var uploadedPath;
            var inputFile;
            var filesTemp = JSON.stringify(files, null, 2);
            if (err) {
                console.log('parse error:' + err);
            } else {
                inputFile = files.file[0];
                uploadedPath = inputFile.path;
                dstPath = dsrc + inputFile.originalFilename;
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
            // res.write(dstPath + "-----" + uploadedPath + "----" + inputFile.originalFilename);
            res.end()
        })
    } catch (e) { console.log(`【error】${e}`) }
})


var path = require('path');
app.get('/test', (req, res) => {
    try {
        res.set({
            // "Content-Type": "application/octet-stream",//告诉浏览器这是一个二进制文件
            // "Content-Disposition": "attachment; filename=" + req.query.name //告诉浏览器这是一个需要下载的文件
        });
        fs.createReadStream('./public/upload/' + req.query.name).pipe(res);
    } catch (e) {
        console.log('出错了' + e);
    }
});










app.listen(3001, function () {
    console.log("app is listening at post 3001...")
});


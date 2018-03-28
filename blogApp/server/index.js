var express = require("express");
var app = express();
var fs = require('fs');


app.use('/', express.static('../dist', { index: "index.html" }));

app.use("/getAllBlogs", (req, res) => {
    getAllBlogs(res);
});
app.use('*', express.static('../dist', { index: "index.html" }));


var server = app.listen(4201, "127.0.0.1", function () { });



function getAllBlogs(res) {
    var obj;
    fs.readFile('./db/allBlogs.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        res.send(obj);
    });
}
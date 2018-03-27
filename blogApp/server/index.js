var express = require("express");
var app = express();

app.use('/', express.static('../dist', {index: "index.html"}));
app.use("/sampleData", (req, res)=> {
    res.send({data: "This is you Sample data response !!!"});
});
app.use('*', express.static('../dist', {index: "index.html"}));


var server = app.listen(4201,"127.0.0.1", function() {});
var express = require("express");
var bodyParser = require('body-parser');

var BlogAPI = require("./blogAPI");
var CommentsAPI = require("./commentAPI");

var app = express();
// app path handlers
app.use(bodyParser.json());
app.use('/', express.static('../dist', { index: "index.html" }));


//blog paths
app.use("/getAllBlogs", (req, res) => {
    BlogAPI.getAllBlogs(res);
});
app.use("/getBlog", (req, res) => {
    BlogAPI.getBlogwithId(req.query['id'], res);
});
app.put("/updateBlog", (req, res)=>{
    BlogAPI.updateBlogwithId(req.body.id, req.body, res);
});
app.put("/updateBlogVotes", (req, res)=>{
    BlogAPI.updateBlogVotes(req.body.id, req.body, res);
});
app.post("/addBlog", function(req, res){
    BlogAPI.addBlog(req.body, res);
});


//comment paths
app.use("/getBlogComments", (req, res)=>{
    CommentsAPI.getBlogComments(req.query['blogId'], res);
});
app.post("/addComment", (req, res)=> {
    CommentsAPI.addComment(req.body, res);
});



//fallback default path - must be the last path 
app.use('*', express.static('../dist', { index: "index.html" }));
//app path handlers - end

//bootstrap express middleware - listen to incomming requests from client
var server = app.listen(8080, "localhost", function () { });

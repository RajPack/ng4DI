var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');

// app path handlers
app.use(bodyParser.json());
app.use('/', express.static('../dist', { index: "index.html" }));
app.use("/getAllBlogs", (req, res) => {
    getAllBlogs(res);
});
app.use("/getBlog", (req, res) => {
    getBlogwithId(req.query['id'], res);
});
app.use('*', express.static('../dist', { index: "index.html" }));
app.put("/updateBlog", (req, res)=>{
    updateBlogwithId(req.body.id, req.body, res);
});
app.put("/updateBlogVotes", (req, res)=>{
    updateBlogVotes(req.body.id, req.body, res);
});
app.post("/addBlog", function(req, res){
    addBlog(req.body, res);
});
//app path handlers - end

//bootstrap express middleware
var server = app.listen(4201, "127.0.0.1", function () { });





//Blog server Functions
function readAllBlogFile (callback) {
    fs.readFile('./db/allBlogs.json', 'utf8', callback);
}
function writeAllBlogFile(data, callback) {
    fs.writeFile("./db/allBlogs.json", data, 'utf8', callback);
}
function getAllBlogs(res) {
    var obj;
    readAllBlogFile( function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        res.send(obj);
    });
}
function getBlogwithId(id, response) {
    readAllBlogFile(function (err, data) { 
        if(err) throw err;
        let blogArr = JSON.parse(data);
        let blog = blogArr.filter((blog)=>{
            return String(blog.id) === id
        });
        response.send(blog[0]);
    });
}
function updateBlogwithId(id, updatedBlog, response){
    readAllBlogFile( function (err, data) {
        if(err) { throw err; }
        let blogArr = JSON.parse(data);
        let blog = blogArr.filter((blog)=>{
            console.log(blog.id)
            return String(blog.id) === String(id)
        })[0];
        blog.title = updatedBlog.title;
        blog.author = updatedBlog.author;
        blog.content = updatedBlog.content;
        writeAllBlogFile(JSON.stringify(blogArr), function(err) {
            if (err) throw err;
            response.send(blog);
        });
    });
}

function updateBlogVotes(id, votes, response) {
    readAllBlogFile( function(err, data) { 
        let blogArr = JSON.parse(data);
        let blog = blogArr.filter((blog)=>{
            console.log(blog.id)
            return String(blog.id) === String(id)
        })[0];
        blog.thumbsUp = votes.thumbsUp;
        blog.thumbsDown = votes.thumbsDown;
        writeAllBlogFile(JSON.stringify(blogArr), function(err) {
            if (err) throw err;
            response.send(blog);
        });
    });
}
function addBlog(newBlog, res) {
    readAllBlogFile( function (err, data) {
        let blogArr = JSON.parse(data);
        blogArr.push(newBlog);
        writeAllBlogFile(JSON.stringify(blogArr), function(err) {
            if (err) throw err;
            res.send({status: "successfully added"});
        });
    })
}
var fs= require ("fs");

// Comments API Section
function readAllCommentsFile(callback) {
    fs.readFile('./db/allComments.json','utf8', callback);
}
function writeAllCommentsFile(data, callback) {
    fs.writeFile('./db/allComments.json', data, 'utf8', callback);
}

function getBlogComments(blogId, resp) {
    readAllCommentsFile((err, data)=>{
        if(err){throw err;}
        let commentArr = JSON.parse(data);
        let blogComments = commentArr.filter((comment)=>{
           return  comment.blogId === +blogId;
        });
        resp.send(blogComments);
    });
}

function addComment(comment, resp) {
    readAllCommentsFile((err, data)=>{
        if(err) { throw err;}
        let commentArr = JSON.parse(data);
        commentArr.push(comment);
        writeAllCommentsFile(JSON.stringify(commentArr), (err)=>{
            if(err){ throw err;}
            resp.send({status: "successfully Added Comment"});
        });
    })
 }

module.exports = {
    getBlogComments: getBlogComments,
    addComment: addComment
}
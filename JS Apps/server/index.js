var express = require("express");
var app = express();

/* serves main page */
app.get("/", function(req, res) {
   res.sendfile('public/index.html')
});

/* serves all the static files */
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


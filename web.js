
var fs = require ("fs");
var express = require('express');
var app = express();
var fileName = "index.html";


app.use(express.logger());

app.get('/', function(request, response) {
    response.send(fs,readFilesync('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
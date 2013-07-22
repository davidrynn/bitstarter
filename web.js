
var fs = require ("fs");
var express = require('express');
var app = express();
var buff = buf.toString(fs.readFileSync('index.html'));
console.log(buff);

app.use(express.logger());

app.get('/', function(request, response) {
    response.send("hello world 3!");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
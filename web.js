var express = require('express');
var app = express();
var buff = buf.toString(fs.readFileSync('index.html'));
console.log(buff);

app.use(express.logger());

app.get('/', function(request, response) {
    response.send(fs.readFileSync('./bistarter/index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
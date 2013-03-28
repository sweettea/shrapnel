var express = require('express');
var redis = require('redis')
var app = express.createServer(express.logger());

app.post('/messages', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());

//Routes go here
// app.get('/', function (req, res) {
//    res.send('Hello World');
// })
// app.use('/', index);
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Start server
var port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log('Listening on', port);
});
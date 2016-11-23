var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'angularjs')));

app.use(express.static(path.join(__dirname, 'bower_components')));

app.listen(5000, () => {
  console.log("server started.");
});

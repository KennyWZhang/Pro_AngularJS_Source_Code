var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'angularjs')));

app.use(express.static(path.join(__dirname, 'bower_components')));

app.post("/listing_20-8_ajax.html", function (request, response) {
  console.log("request headers: " + request.headers)

  // for (value in request) {
  //   console.log(value);
  // }
  response.send()
})

app.listen(5000, () => {
  console.log("server started.");
});

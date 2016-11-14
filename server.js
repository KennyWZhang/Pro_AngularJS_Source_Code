var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'angularjs')));

app.use(express.static(path.join(__dirname, 'bower_components')));

app.get('/products', (request, response) => {
  response.send([
    {
      "category": "Watersprots",
      "description": " A boat for one person",
      "name": "Kayak",
      "price": 275,
      "id": "05af70"
    }
  ]);
});

app.listen(5000, () => {
  console.log("server started.");
});

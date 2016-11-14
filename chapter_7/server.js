var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'angularjs')));

app.use(express.static(path.join(__dirname, 'bower_components')));

app.get('/products', (request, response) => {
  response.send([
    {
      "category": "categoryA",
      "description": " A boat for one person",
      "name": "product #1",
      "price": 275,
      "id": "05af71"
    },
    {
      "category": "categoryA",
      "description": " A boat for one person",
      "name": "product #2",
      "price": 275,
      "id": "05af72"
    },
    {
      "category": "categoryA",
      "description": " A boat for one person",
      "name": "product #3",
      "price": 275,
      "id": "05af73"
    },
    {
      "category": "categoryB",
      "description": " A boat for one person",
      "name": "product #4",
      "price": 275,
      "id": "05af74"
    },
    {
      "category": "categoryB",
      "description": " A boat for one person",
      "name": "product #5",
      "price": 275,
      "id": "05af75"
    },
    {
      "category": "categoryB",
      "description": " A boat for one person",
      "name": "product #6",
      "price": 275,
      "id": "05af76"
    },
    {
      "category": "categoryB",
      "description": " A boat for one person",
      "name": "product #7",
      "price": 275,
      "id": "05af77"
    },
    {
      "category": "categoryB",
      "description": " A boat for one person",
      "name": "product #8",
      "price": 275,
      "id": "05af78"
    }
  ]);
});

app.listen(5000, () => {
  console.log("server started.");
});

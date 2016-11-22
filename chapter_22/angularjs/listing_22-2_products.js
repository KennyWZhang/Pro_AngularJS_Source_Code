angular.module("exampleApp", ["increment", "ngResource"])
.config(
  function (logServiceProvider) {
    logServiceProvider.debugEnabled(true).messageCounterEnabled(false);
  }
)
.constant("baseUrl", "http:localhost:5500/products")
.controller(
  "defaultController",
  function ($scope, $http, $resource, baseurl) {
    $scope.displayMode = "list"
    $scope.currentProduct = null
    $scope.productsResource = $resource(baseUrl + ":id", {id : "@id"}, {
      create: {method: "POST"}, save: {method: "PUT"}
    })

    $scope.listProducts = function () {
      $scope.products = $scope.productsResource.query()
    }
  }
)

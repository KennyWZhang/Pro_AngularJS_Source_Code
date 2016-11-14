angular.module("sportsStoreApp")
.constant("dataUrl", "http://localhost:5000/products")
.controller(
  "sportsStoreController",
  function ($scope, $http, dataUrl) {
    $scope.data = {};

    $http.get(dataUrl).success(
      function (data) {
        $scope.data.products = data;
      }
    ).error(
      function (error) {
        //console.log(error);
        $scope.data.error = error;
      }
    );;
  }
);

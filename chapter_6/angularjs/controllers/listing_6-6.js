angular.module("sportsStoreApp").controller(
  "productListController",
  function ($scope) {
    var selectedCategory = null;

    $scope.selectCategory = function (newCategory) {
      selectedCategory = newCategory;
    }

    $scope.categoryFilterFn = function (product) {
      return selectedCategory == null ||
      product.category == selectedCategory;
    }
  }
);

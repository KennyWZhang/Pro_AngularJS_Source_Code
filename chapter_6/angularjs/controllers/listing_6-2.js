angular.module("sportsStoreApp").controller(
  "sportsStoreController",
  function ($scope) {
    $scope.data = {
      products: [
        {
          name: "product #1",
          desciption: "desciption",
          category: "category #1",
          price: 100
        },
        {
          name: "product #2",
          desciption: "desciption",
          category: "category #1",
          price: 100
        },
        {
          name: "product #3",
          desciption: "desciption",
          category: "category #2",
          price: 100
        },
        {
          name: "product #4",
          desciption: "desciption",
          category: "category #2",
          price: 100
        }
      ]
    };
  }
);

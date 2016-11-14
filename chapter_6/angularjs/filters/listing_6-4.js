angular.module("customFilters", []).filter(
  "uniqueF",
  function () {
    return function (data, propertyName) {

      // console.log(data + " dddddd");

      // console.log(propertyName + " propertyName");

      if (angular.isArray(data) && angular.isString(propertyName)) {
        var results = [];
        var keys = {};
        for (var i = 0; i < data.length; i++) {
          var value = data[i][propertyName];
          if (angular.isUndefined(keys[value])) {
            keys[value] = true;
            results.push(value);
          }
        }

        // console.log(results + " ssssss");

        return results;
      } else {
        return data;
      }
    };
  }
);

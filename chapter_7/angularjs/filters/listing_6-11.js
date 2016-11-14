angular.module("customFilters", [])
.filter(
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
)
.filter(
  "range",
  function ($filter) {
    return function (data, page, size) {

      if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
        var start_index = (page - 1) * size;

        if (data.length < start_index) {
          return [];
        } else {
          return $filter("limitTo")(data.splice(start_index), size);
        }
      } else {
        return data;
      }
    };
  }
)
.filter(
  "pageCount",
  function ($filter) {
    return function (data, size) {

      if (angular.isArray(data)) {
        var results = [];
        for (var i = 0; i < Math.ceil(data.length / size); i++) {
          results.push(i);
        }

        return results;
      } else {
        return data;
      }
    };
  }
);

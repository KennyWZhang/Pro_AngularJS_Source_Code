      angular.module("customDirectives", ["customServices"])
      .directive(
        "triButton",
        function (logService) {
          return {
            scope: {counter: "=counter"},
            link: function (scope, element, attrs) {
              element.on(
                "click",
                function (event) {
                  logService.log(event.target.innerText);
                  scope.$apply(function () {
                    scope.counter++;
                  });
                }
              );
            }
          };
        }
      );

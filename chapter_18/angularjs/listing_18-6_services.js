
      angular.module("customServices", [])
      .factory(
        "logService",
        function () {

          var msgCount = 0;
          return {
            log: function (msg) {
              console.log(msgCount++ + ") "+ msg);
            }
          }
        }
      );

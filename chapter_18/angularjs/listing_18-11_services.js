angular.module("customServices", [])
.provider(
  "logService",
  function () {
    return {
      $get: function () {
        msgCount: 0,
        log: function (msg) {
          console.log(msgCount++ + ") "+ msg);
        }
      }
    }
  }
);

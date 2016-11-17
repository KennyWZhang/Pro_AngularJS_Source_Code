angular.module("customServices", [])
.service(
  "logService",
  function () {
    return {
      msgCount: 0,
      log: function (msg) {
        console.log(msgCount++ + ") "+ msg);
      }
    }
  }
);

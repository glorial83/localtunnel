var localtunnel = require("localtunnel");
const { listenerCount } = require("process");

try {
  localtunnel(9080, { subdomain: "take" }, function (err, tunnel) {
    console.log("localtunner is runningdddd");
  });
} catch (exception) {
  console.log(exception);
}

/*
forever list
forever start test.js
forever stopall
*/

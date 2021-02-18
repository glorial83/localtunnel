var localtunnel = require("localtunnel");
const { listenerCount } = require("process");

try {
  localtunnel(9080, { subdomain: "take" }, function (err, tunnel) {
    console.log("localtunner is running!!!!!!!");
  });
} catch (exception) {
  console.log(exception);
}

/*
외부에서 내부네트워크로 접속하기
https://take.localtunnel.me/ 으로 시작하면 됨

forever list
forever start test.js
forever stopall
*/

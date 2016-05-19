var http = require('http');
var request = require('request');

http.createServer((req, res) => {

  var targetUrl = req.url;
  var method = req.method;

  var opt = {
    'url': targetUrl,
    'method': method
  };
  request(opt, function (err, response, body) {
    if (err) {
      console.log(err);
    } else {
      res.end(body);
      console.log(body);
    }
  });
}).listen(4000, () => {
  console.log("\033[96m   Now the server listening on *:4000\033[39m");
});

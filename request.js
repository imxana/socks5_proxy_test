var http = require('http');
var opt = {
  'host': 'localhost',
  'port': '4000',
  'method': 'GET',
  'path': 'http://localhost:3000',
  'headers':{}
};
var body = '';
var req = http.request(opt, function(res) {
  console.log('Got response: ' + res.statusCode);
  res.on('data',function(d){
    body += d;
  }).on('end', function(){
    console.log(res.headers)
    console.log(body)
  });
}).on('error', function(e) {
  console.log('Got error: ' + e.message);
})
req.end();

var http = require('http');
var opt = {
  'host': '59.78.160.248',//'localhost',
  'port': '8080',//'4000',
  'method': 'GET',
  'path': 'http://139.129.24.151:3000',
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

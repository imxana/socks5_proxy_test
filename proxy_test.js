/*
 * Created by XANA on 2016/5/17
 * ex: http://localhost:3000/?url=http://www.bilibili.com
 */


var http = require('http');
var querystring = require('querystring');
var url = require('url');


// express abort...

// var express = require('express');
// var app = express();
// var http = require('http');
//
// var server = http.createServer(app);
//
// app.get('/', function (req, res) {
//   console.log(req.url);
// 	res.send('Hello');
// })
//
// server.listen(3000, function () {
//   console.log("\033[96m   Now the server listening on *:3000\033[39m");
// })




// http is enough..

http.createServer((req, res) => {

  console.log(req.url, req.method);

  var query = url.parse(req.url).query;
  var end = querystring.parse(query) //JSON.stringify() //str => json
  var end_json = url.parse(end.url || '/')

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>${end.url}</h1>`);

  console.log(query, end.url, 'proxy.test.js:44');

  if(end_json.hostname){
    getRequest(end_json, res)
    // console.log(data, 'data');
    // res.write(data);
  } else
    res.end('ex: http://localhost:3000/?url=http://www.bilibili.com')

}).listen(3000, () => {
  console.log("\033[96m   Now the server listening on *:3000\033[39m");

})




// client get test passed...

// http.get('http://localhost:3000?url=http://localhost:3000/shit', (res) => {
//   console.log(`Got response: ${res.statusCode}`);
//   // consume response body
//   // res.resume('123');
// }).on('error', (e) => {
//   console.log(`Got error: ${e.message}`);
// });






// to get the destination message

function getRequest(po, resp) {
  // var postData = querystring.stringify({
  //   'msg' : 'Hello World!'
  // });
  var options = {
    hostname: po.hostname,
    port: po.port,
    path: po.path,
    method: 'GET', // 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Content-Length': postData.length
    }
  };
  var req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    var data = ''
    res.on('data', (chunk) => {
      data += chunk.toString()
      // console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      resp.end(data)
      console.log('No more data in response.')
    })
  }).on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
  });
  // write data to request body
  // req.write(postData);
  req.end();
}

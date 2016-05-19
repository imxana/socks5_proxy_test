var http = require('http');
var querystring = require('querystring');
var request = require('request');
var Agent = require('./lib/Agent');
var uri = '';

(() =>{
  var options = {
    uri: `http://dev.kuaidaili.com/api/getproxy/?orderid=936363890149463&num=1&b_pcchrome=1&b_pcie=1&b_pcff=1&protocol=1&method=2&an_an=1&an_ha=1&sep=1`,
    method: 'GET',
    headers: {}
  };
  request(options, (err, res, body) => {
    uri = body.split(':')
    console.log(body);
    0 && requestGo() || httpGo()
  });
})()



// why request not?

function requestGo() {
  var options = {
      uri: 'http://www.tinydust.cn',
      method: 'GET',
      agentClass: Agent,
      agentOptions: {
          socksHost: uri[0],//'120.52.73.23', // Defaults to 'localhost'.
          socksPort: uri[1]//'80'// Defaults to 1080.
      }
  }
  request(options, (err, res, body) => {
      console.log(err || body);
  });
}



// http works!

function httpGo() {
  var opt = {
    'host': uri[0],//'localhost',
    'port': uri[1],//'4000',
    'method': 'GET',
    'path': 'http://www.tinydust.cn',
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
}

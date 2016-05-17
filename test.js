// var shttp = require('socks5-http-client');
//
// shttp.get('http://www.baidu.com/', function(res) {
//     res.setEncoding('utf8');
//     res.on('readable', function() {
//         console.log(res.read()); // Log response to console.
//     });
// });

var Agent = require('socks5-http-client/lib/Agent');
var request = require('request');

request({
    // url: 'http://en.wikipedia.org/wiki/SOCKS',
    url: 'http://www.baidu.com/',
    agentClass: Agent,
    agentOptions: {
      socksHost: 'localhost',
      socksPort: 1080
        // socksHost: 'my-tor-proxy-host', // Defaults to 'localhost'.
        // socksPort: 9050 // Defaults to 1080.
    }
}, function(err, res) {
    console.log(err || res.body);
});

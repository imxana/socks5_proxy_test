/**
 * @overview
 * @author Matthew Caruana Galizia <m@m.cg>
 * @license MIT
 * @copyright Copyright (c) 2013, Matthew Caruana Galizia
 * @preserve
 */

'use strict';

/*jshint node:true*/

var http = require('http');
var inherits = require('util').inherits;
var socksClient = require('socks5-client');

function Agent(options) {
	http.Agent.call(this, options);

	this.socksHost = options.socksHost || 'localhost';
	this.socksPort = options.socksPort || 1080;

	this.createConnection = socksClient.createConnection;
}

inherits(Agent, http.Agent);

module.exports = Agent;



//ex: the example is copyed from https://github.com/mattcg/socks5-https-client
// Using with Request
//
// To use with Request, just pass a reference to the Agent constructor..

// var Agent = require('socks5-https-client/lib/Agent');
//
// request({
//     url: 'https://encrypted.google.com/',
//     strictSSL: true,
//     agentClass: Agent,
//     agentOptions: {
//         socksHost: 'my-tor-proxy-host', // Defaults to 'localhost'.
//         socksPort: 9050 // Defaults to 1080.
//     }
// }, function(err, res) {
//     console.log(err || res.body);
// });

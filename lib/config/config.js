'use strict'

var config = {
/***  server config  ***/
	server: {
		device: 'server',
		port: 5683,
		serverProtocol: 'udp4'
	},
/***  client config  ***/
	client: {
		device: 'client',
		lifetime: '85671',
    	version: '1.0'
	}
};

module.exports = config;
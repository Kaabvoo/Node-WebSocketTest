const webs = require('websocket').server;
const http = require('http');

var server = http.createServer(()=>{});
server.listen(8018, "10.16.134.192", 

var wsserv = new webs({
    httpServer: server
})


var socket = new webs({
    
})
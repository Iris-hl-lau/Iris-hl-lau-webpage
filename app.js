'use strict';

// let http = require('http');
// http.createServer(function(request, response) {
//     response.statusCode = 200;
// 	response.writeHead(200, {'Content-type' : 'text/plain'});
//     // response.write("Response's coming from server ... \n");
//     let time = new Date(); 
//     let curTime = String(time);
// 	response.end(curTime);
// 	}
// ).listen(8080 || process.env.PORT);
// console.log('listening ... ');

let http = require('http');
let date = new Date();

let port = process.env.PORT || 8080
http.createServer((request, response) => {
response.writeHead(200,{'Content-type': 'text/plain'});
response.end(date);
}).listen(port,() => {
console.log('listening....');
});
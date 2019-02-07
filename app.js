'use strict';

let http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200, {'Content-type' : 'text/plain'});
    // response.write("Response's coming from server ... \n");
    let time = new Date(); 
    
    let curTime = String(time);
	response.end(curTime);
	}
).listen(8000);
console.log('listening ... ');

// let http = require('http');
// let date = new Date();

// let port=process.env.PORT || 8080
// const server = http.createServer((req, res) => {
// //res.statusCode = 200;
// res.writeHead(200,{'Content-type': 'text/plain'});
// //response.write('Date: ' + now);
// res.end(date);
// });
// server.listen(port,() => {
// console.log('listening....');
// });
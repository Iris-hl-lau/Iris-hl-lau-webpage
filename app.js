// let http = require('http');
// http.createServer(function(request, response) {
// 	response.writeHead(200, {'Content-type' : 'text/plain'});
//     // response.write("Response's coming from server ... \n");
//     let time = new Date(); 
    
//     let curTime = String(time);
//     response.write(curTime);
// 	response.end();
// 	}
// ).listen(8000);
// console.log('listening ... ');

let http = require('http');
let now = new Date();

let port=process.env.PORT || 8080
const server = http.createServer((req, res) => {
//res.statusCode = 200;
res.writeHead(200,{'Content-type': 'text/plain'});
//responce.write('Date: ' + now);
res.end('Date: ' + now);
});
server.listen(port,() => {
console.log('listening....');
});
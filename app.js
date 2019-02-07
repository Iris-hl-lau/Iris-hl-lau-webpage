let http = require('http');
let date = new Date();

let port = process.env.PORT || 8080
http.createServer((request, response) => {
response.writeHead(200,{'Content-type': 'text/plain'});
response.end(String(date));
}).listen(port,() => {
console.log('listening...');
});

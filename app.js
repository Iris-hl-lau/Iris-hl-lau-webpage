let http = require('http');
let date = new Date();

let port=process.env.PORT || 8080
const server = http.createServer((request, response) => {
response.writeHead(200,{'Content-type': 'text/plain'});
response.end(String(date));
});
server.listen(port,() => {
console.log('listening...');
});

// let http = require('http');
// let date = new Date();

// let port=process.env.PORT || 8080
// const server = http.createServer((request, response) => {
// response.writeHead(200,{'Content-type': 'text/plain'});
// response.end(date);
// });
// server.listen(port,() => {
// console.log('listening....');
// });

let http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200, {'Content-type' : 'text/plain'});
    // response.write("Response's coming from server ... \n");
    let time = new Date(); 
    
    let curTime = String(time);
    response.write(curTime);
	response.end();
	}
).listen(8000);
console.log('listening ... ');


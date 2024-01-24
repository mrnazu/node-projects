const http = require('http');

const host = 'localhost'
const port = 3001;

const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Nazu 2');
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
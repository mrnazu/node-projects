const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');
const { unescape } = require('querystring');

const mime = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

http.createServer(function(req, res){
    const uri = url.parse(req.url).pathname;
    const fileName = path.join(process.cwd(), unescape(uri));
    console.log('Loding', uri);
    let stats;

    try {
        stats = fs.lstatSync(fileName);
    } catch (error) {
        res.writeHead(404, {
            "Content-type": "text/plain"
        })
        res.write('404 Not Found\n')
        res.end();
        return;
    }

    if(stats.isFile()){
        let mimes = mime[path.extname(fileName).split(".").reverse()[0]];
        res.writeHead(200, {
            "Content-type": mimes
        })

        let fileStream = fs.createReadStream(fileName);

        fileStream.pipe(res);
    } else if(stats.isDirectory()){
        res.writeHead(302, {
            'location': 'index.html'
        })
        res.end();
    } else{
        res.writeHead(500, {
            'Content-tpye': "text/plain",
        })
        res.write('500 Internal Error\n')
        res.end();
    }
}).listen(3002, console.log('server is listening on port 3002'));
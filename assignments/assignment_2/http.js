const http = require('http');
const fs = require('fs');


const http1 = http.createServer((req, res) => {
    var data = fs.readFileSync("index.html",'utf-8');
    console.log(data);
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(data);

});
http1.listen(3000, () => console.log("Server is listening on port number 3000..."));
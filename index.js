const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(`The URL for the request was '${req.url}'`);
    console.log(`The Method for the request was '${req.method}'`);
    const content = fs.readFileSync('./static/index.html', 'utf-8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(content);
});

const hostname = 'localhost';
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
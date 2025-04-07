// Serve index.html on port 3000
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('index.html').pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000);

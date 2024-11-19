const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Node.js!');
});

server.listen(port, hostname, () => {
  console.log(`Server is up and running at http://${hostname}:${port}/`);
});

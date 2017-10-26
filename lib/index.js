// @flow
import http from 'http';

function hello(): string {
  return 'Hello World\n';
}

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(hello());
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

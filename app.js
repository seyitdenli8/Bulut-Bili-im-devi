const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('<h1>Seyit Ahmet</h1><p>2200000000</p>');
}).listen(PORT, '0.0.0.0', () => console.log('Calisiyor: ' + PORT));

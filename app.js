const http = require('http');
const fs = require('fs');
const path = require('path');

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const route = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, route);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Dosya bulunamadi');
      return;
    }
    const ext = path.extname(filePath);
    const types = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.json': 'application/json; charset=utf-8',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon'
    };
    res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Sunucu baslatildi: http://${HOST}:${PORT}`);
  console.log('Durdurmak icin Ctrl+C');
});

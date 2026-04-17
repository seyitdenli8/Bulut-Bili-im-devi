const http = require('http');
const PORT = process.env.PORT || 3000;

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>CI/CD Lab</title>
  <style>
    body { background: #0f172a; color: white; font-family: Arial;
           display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
    .card { background: #1e293b; padding: 40px; border-radius: 16px; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Seyit Ahmet</h1>
    <p>Öğrenci No: 2200000000</p>
  </div>
</body>
</html>`;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(html);
}).listen(PORT, '0.0.0.0', () => console.log(`Çalışıyor: ${PORT}`));
server.listen(PORT, HOST, () => {
  console.log(`Sunucu baslatildi: http://${HOST}:${PORT}`);
  console.log('Durdurmak icin Ctrl+C');
});

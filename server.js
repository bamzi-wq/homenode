const http = require('http');
const { exec } = require('child_process');

exec('xray -config config.json');

http.createServer((req, res) => {
  res.end('homenode is running');
}).listen(process.env.PORT || 8080);

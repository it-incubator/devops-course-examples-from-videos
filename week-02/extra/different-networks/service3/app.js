const http = require('http');

const NAME = 'service3';
const TARGET = 'http://service1:3000/';

http.createServer((req, res) => {
  res.end(JSON.stringify({ service: NAME, time: new Date().toISOString() }));
}).listen(3000, () => console.log(`[${NAME}] listening on :3000, target=${TARGET}`));

setInterval(() => {
  http.get(TARGET, (res) => {
    let body = '';
    res.on('data', (c) => (body += c));
    res.on('end', () => console.log(`[${NAME}] PING OK   -> ${TARGET} ${res.statusCode} ${body}`));
  }).on('error', (e) => console.log(`[${NAME}] PING FAIL -> ${TARGET} ${e.code || e.message}`));
}, 10000);

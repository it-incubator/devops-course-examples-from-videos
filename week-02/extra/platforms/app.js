const http = require('http');
const os = require('os');

http.createServer((_, res) => {
  res.end(`hello world from ${os.arch()}\n`);
}).listen(3000, () => console.log(`listening on 3000 (arch=${os.arch()})`));

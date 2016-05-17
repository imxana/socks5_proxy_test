var http = require('http');

http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>I'm Server</h1>`);
  } else {
    res.writeHead(404,  { 'Content-Type': 'text/html' })
    res.end('<h1>Not Found</h1>')
  }

}).listen(4000, () => {
  console.log("\033[96m   Now the server listening on *:4000\033[39m");
})

const http = require("http");

const port = 1337;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("JuhQ on paras! 😍\n");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

"use strick";
const http = require("node:http");
const cp = require("node:child_process");
const server = http.createServer((req, res) => {
  const path = req.url;
  res.writeHead(200, {
    "Content-Type": "text/plain; charset=utf-8",
  });
  res.end(cp.execSync(`echo ${path}`));
});

const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});

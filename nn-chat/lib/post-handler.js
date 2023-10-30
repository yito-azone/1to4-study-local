"use strict";
const pug = require("pug");

function handle(req, res) {
  switch (req.method) {
    case "GET":
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });
      res.end(pug.renderFile("./views/posts.pug"));
      break;
    case "POST":
      let body = "";
      req
        .on("data", (chunk) => {
          body += chunk;
        })
        .on("end", () => {
          const params = new URLSearchParams(body);
          const content = params.get("content");
          console.info(`送信しました: ${content}`);
          handleRedirectPosts(req, res);
        });
      break;
    default:
      break;
  }
}

function handleRedirectPosts(req, res) {
  res.writeHead(303, {
    Location: "/posts",
  });
  res.end();
}

module.exports = {
  handle,
};

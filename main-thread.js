import http from "node:http";

import { Worker } from "node:worker_threads";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/slow-page") {
    const worker = new Worker("./worker.js");
    worker.on("message", (j) => {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end(`Slow page ${j}`);
    });
  }
});

server.listen(8000, () => console.log(`Server running on port 8000`));

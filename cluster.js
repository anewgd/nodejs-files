import cluster from "node:cluster";
import http from "node:http";
import os from "node:os";

console.log(os.cpus().length);

if (cluster.isPrimary) {
  console.log(`Primary process ${process.pid} is running.`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker process ${process.pid} started.`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("Home page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 6000000000; i++) {}
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("Slow page");
    }
  });

  server.listen(8000, () => console.log(`Server running on port 8000`));
}

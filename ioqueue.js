import { createReadStream } from "node:fs";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// readFile(__filename, () => {
//   console.log("This is readFile 1");
//   setImmediate(() => {
//     console.log(`This is inner setImmediate 1`);
//   });
//   process.nextTick(() => {
//     console.log(`This is inner process.nextTick 1`);
//   });
//   Promise.resolve().then(() => {
//     console.log(`This is inner Promise.resolve 1`);
//   });
// });

const read = createReadStream(__filename);
read.close();

read.on("close", () => {
  console.log(`This is readstream close event`);
});

setImmediate(() => {
  console.log(`This is inner setImmediate 1`);
});
process.nextTick(() => {
  console.log(`This is process.nextTick 1`);
});
Promise.resolve().then(() => {
  console.log(`This is Promise.resolve 1`);
});

setTimeout(() => {
  console.log(`This is timeout 3`);
}, 0);

// for (let i = 0; i < 2000000000; i++) {}

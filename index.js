// import events from "node:events";

// const emitter = new events();

// emitter.on("order-pizza", (size, topping) => {
//   console.log(
//     `Order received! Baking a ${size} pizza with ${topping} topping.`
//   );
// });

// emitter.on("order-pizza", (size) => {
//   if (size === "large") console.log("Serving complementary drink");
// });
// emitter.emit("order-pizza", "large", "mushroom");

// import { PizzaShop } from "./pizza-shop.js";
// import { DrinkMachine } from "./drink-machine.js";

// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();

// pizzaShop.on("order", (size, topping) => {
//   console.log(
//     `Order received! Baking a ${size} pizza with ${topping} topping.`
//   );
//   drinkMachine.serveDrink(size);
// });

// pizzaShop.order("large", "pepperoni");
// pizzaShop.displayOrderNumber();

// const buffer = new Buffer.from("Abraham");

// console.log(buffer);
// console.log(buffer.toJSON());

// import fs from "node:fs";

// console.log(fs.readFileSync("./file.txt", "utf-8"));

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// fs.writeFile("./greet.txt", "Hello", (err) => {
//   if (err) console.log(err);
//   else console.log("File successfully written");
// });

// import { WriteStream, createReadStream, createWriteStream } from "node:fs";

// import { createGzip } from "node:zlib";

// async function readFile() {
//   try {
//     const data = await fs.readFile("./file.txt", "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// readFile();
// console.log("first");
// fs.readFiles("./file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// console.log("SECOND");
// const gizp = createGzip();
// const readableStream = createReadStream("./file.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });

// //Chaining pipes.
// readableStream.pipe(gizp).pipe(WriteStream("./file2.txt.gz"));

// const writeableStream = createWriteStream("./file2.txt", {
//   encoding: "utf-8",
// });

// readableStream.pipe(writeableStream);

// import { readFile } from "node:fs";

//Password-Based Key Derivation Function 2 (PBKDF2)
// import { pbkdf2, pbkdf2Sync } from "node:crypto";

// process.env.UV_THREADPOOL_SIZE = 1;

import https from "node:https";

const MAX = 26;
const start = Date.now();

for (let i = 0; i < MAX; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1}`, Date.now() - start);
      });
    })
    .end();
  // pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  //   console.log(`Hash: ${i + 1}`, Date.now() - start);
  // });
}

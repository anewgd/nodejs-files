// console.log("Log 1");
// process.nextTick(() => {
//   console.log("this is process.nextTick() 1");
// });
// console.log("Log 2");

process.nextTick(() => {
  console.log(`This is process.nextTick 1`);
});
Promise.resolve().then(() => {
  console.log(`This is Promise.resolve 1`);
});

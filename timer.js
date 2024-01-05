setTimeout(() => {
  console.log(`This is timeout 1`);
}, 1000);
setTimeout(() => {
  console.log(`This is timeout 2`);
}, 500);
setTimeout(() => {
  console.log(`This is timeout 3`);
}, 0);

// process.nextTick(() => {
//   console.log(`This is process.nextTick 1`);
// });
// process.nextTick(() => {
//   console.log(`This is process.nextTick 2`);
//   process.nextTick(() => {
//     console.log("Inner next tick in nextTick");
//   });
// });
// process.nextTick(() => {
//   console.log(`This is process.nextTick 3`);
// });

// Promise.resolve().then(() => {
//   console.log(`This is Promise.resolve 1`);
// });
// Promise.resolve().then(() => {
//   console.log(`This is Promise.resolve 2`);
//   process.nextTick(() => {
//     console.log(`Inner next tick in Promise.`);
//   });
// });
// Promise.resolve().then(() => {
//   console.log(`This is Promise.resolve 3`);
// });

const fs = require("fs");
const promise = require("process");
const a = 100;
setImmediate(() => console.log("setImmadiiate"));

Promise.resolve(() => console.log("Promise"));

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File reading CB");
});

setTimeout(() => console.log("timer expired"), 0);

promise.nextTick(() => console.log("nextTick"));

function printA() {
  console.log("a", a);
}

printA();
console.log("Last line of the file");

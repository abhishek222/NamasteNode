const fs = require("fs");
const https = require("https");
const crypto = require("node:crypto");

console.log("Helllo World!");

var a = 107857;
var b = 107857;
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  // password based key derivative function
  console.log("Key is generated");
});

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetch data successfully");
});

setTimeout(() => {
  console.log("Set timeout called after 5 seconds");
}, 5000);

//Sync function         // it will block main thread
fs.readFileSync("./file.txt", "utf8", (err, data) => {
  console.log("Sync", data);
});

//Async function
fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
function multiply(a, b) {
  return a * b;
}

console.log(
  "The result of multiplying " + a + " and " + b + " is " + multiply(a, b)
);

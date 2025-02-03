require("./xyz"); // this file will run before   // one module into another

// const { x, calculateSum } = require("./calculate/sum");
// const { calculateMultiply } = require("./calculate/multiply");

const util = require("node:util"); // core module
const { calculateSum, calculateMultiply } = require("./calculate"); // import from index.js file
const data = require("./data.json");
console.log(util.inspect(calculateSum, { depth: null })); // inspect function to get a string representation of an object
console.log(data);

console.log("app.js");
console.log(calculateSum(2, 3));
console.log(calculateMultiply(2, 3));
console.log(__dirname);
console.log(__filename);

// console.log(x);

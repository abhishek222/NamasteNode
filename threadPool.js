const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 2; //change size of thead pool
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  // password based key derivative function
  console.log("1 pbkdf2 is called");
});

crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  // password based key derivative function
  console.log("2 pbkdf2 is called");
});

crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  // password based key derivative function
  console.log("3 pbkdf2 is called");
});
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  // password based key derivative function
  console.log("4 pbkdf2 is called");
});

crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  // password based key derivative function
  console.log("5 pbkdf2 is called");
});

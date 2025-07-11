
const crypto = require("crypto");

console.log("Total Time");

// const MAX_TIME = 4;
// const now = Date.now();
// for (let i = 0; i < MAX_TIME; i++) {
//   crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
//   console.log(`Task ${i}: ${Date.now() - now}`);
// }

// process.env.UV_THREADPOOL_SIZE = 5;
const MAX_TIME = 12;
const now = Date.now();
for (let i = 0; i < MAX_TIME; i++) {
  crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
    console.log(`Task ${i}: ${Date.now() - now}`);
  });
}


const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

let products = fs
  .readFileSync("../products/productList.txt")
  .toString()
  .replace(" ", "")
  .split(",");

console.log(products);

function inputHandler(search) {
  let found = products.includes(search);
  if (found) {
    console.log(search, "exists in the system");
    return true;
  } else {
    console.log(search, "does not exist in the system");
    return false;
  }
}

rl.question("Input the product you are searching for: ", inputHandler);

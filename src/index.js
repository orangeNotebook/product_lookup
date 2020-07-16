const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

let products = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"];
console.log(products);

function isProductPresent(search) {
  return products.includes(search);
}

function inputHandler(search) {
  if (isProductPresent(search)) {
    console.log(search, "exists in the system");
  } else {
    console.log(search, "does not exist in the system");
  }
}

rl.question("Input the product you are searching for: ", inputHandler);

exports.isProductPresent = isProductPresent;

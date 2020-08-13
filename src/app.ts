import readline = require("readline");
import ProductFinder from "./services/finder";

let rl = readline.createInterface(process.stdin, process.stdout);

export function inputHandler(answer: string, finder: ProductFinder): string {
  if (answer === "Q") {
    rl.close();
    return null;
  }

  let result = finder.getProduct(answer);
  if (result) {
    return result.toString();
  } else {
    return `Product doesn't exist ${answer}`;
  }

  getInput(finder);
}

export function getInput(finder: ProductFinder): void {
  rl.question("Input your medical licence number or Q to quit: ", (answer) =>
    inputHandler(answer, finder)
  );
}

import ProductFinder from "./services/finder";
import { getInput, inputHandler } from "./app";
import getData from "./repositories/data-provider";

export default function search(product): string {
  let finder = new ProductFinder(getData);
  return inputHandler(product, finder);
}

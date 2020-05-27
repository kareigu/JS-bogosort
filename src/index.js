import { shuffle } from "./shuffle.js"
import { check } from "./check.js"
import { readFlags } from "./flags.js"

readFlags();

const sortedArray = [1,2];
let arrayToSort = shuffle(sortedArray);
let isSorted = false;

while (!isSorted) {
  console.log(arrayToSort);
  if (check(sortedArray, arrayToSort)) {
    isSorted = true;
    console.log("Result: " + arrayToSort);
  }
  arrayToSort = shuffle(arrayToSort);
}

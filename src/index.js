import { shuffle } from "./shuffle.js"
import { check } from "./check.js"
import { readFlags } from "./flags.js"
import { fillArray } from "./fillArray.js"

const arrLength = readFlags();

console.log("Running bogosort for an array of: " + arrLength);

const sortedArray = fillArray(arrLength);
let arrayToSort = shuffle(sortedArray);
let isSorted = false;

while (!isSorted) {
  if (check(sortedArray, arrayToSort)) {
    isSorted = true;
    console.log("Result: " + arrayToSort);
  }
  arrayToSort = shuffle(arrayToSort);
}

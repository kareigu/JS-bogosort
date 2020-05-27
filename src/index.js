import {shuffle} from "./shuffle.js"
import {check} from "./check.js"

const sortedArray = [1,2,3,4,5];
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

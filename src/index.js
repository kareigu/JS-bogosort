import { shuffle } from "./shuffle.js"
import { check } from "./check.js"
import { readFlags } from "./flags.js"
import { fillArray } from "./fillArray.js"


//Read startup flags and store in a value
const arrLength = readFlags();
console.log("Running bogosort for an array of: " + arrLength);

//Fill reference array based on the startup flag
const sortedArray = fillArray(arrLength);
let arrayToSort = shuffle(sortedArray);

let isSorted = false;

//Keep checking and shuffling the array until it matches the reference array
while (!isSorted) {
  if (check(sortedArray, arrayToSort)) {
    //End the loop and log the result for reference
    isSorted = true;
    console.log("Result: " + arrayToSort);
  }
  arrayToSort = shuffle(arrayToSort);
}

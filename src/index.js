import { shuffle } from "./shuffle.js"
import { check } from "./check.js"
import { readFlags } from "./flags.js"
import { fillArray } from "./fillArray.js"
import { startTimer, stopTimer } from "./timer.js"



//Read startup flags and store in a value
const arrLength = readFlags();
console.log("Running bogosort for an array of: " + arrLength);
console.log("----");

//Fill reference array based on the startup flag
const sortedArray = fillArray(arrLength);
let arrayToSort = shuffle(sortedArray);

let isSorted = false;
let iterations = 0;
startTimer();

//Keep checking and shuffling the array until it matches the reference array
while (!isSorted) {
  if (check(sortedArray, arrayToSort)) {
    //End the loop and log the result for reference
    isSorted = true;
    console.log("Iterations: " + iterations);
    console.log("Time taken: " + stopTimer());
    console.log("Result: " + arrayToSort);
  }
  iterations++;
  arrayToSort = shuffle(arrayToSort);
}

export let check = (sArray, tArray) => {
  //Loop through the arrays comparing the same indexes
  for(let i = 0; i < sArray.length; i++) {
    if (sArray[i] != tArray[i]){
      return false; //If at any point the indexes don't match return false
    }
  }
  return true; //If the loop runs through till the end the arrays must be identical, so we return true
}

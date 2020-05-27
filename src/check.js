export let check = (sArray, tArray) => {
  for(let i = 0; i < sArray.length; i++) {
    if (sArray[i] != tArray[i]){
      console.log(sArray[i] + ", " + tArray[i]);
      return false;
    }
  }
  return true;
}

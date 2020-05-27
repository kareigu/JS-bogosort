export let fillArray = (length) => {
  let output = [];
  for (let i = 0; i < length; i++) {
    output[i] = i + 1;
  }
  return output;
}

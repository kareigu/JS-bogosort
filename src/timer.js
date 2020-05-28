let startTime;
let endTime;

export let startTimer = async () => {
  startTime = Date.now();
}

export let stopTimer = () => {
  endTime = Date.now();
  const elapsed = endTime - startTime;
  const seconds = Math.floor(elapsed / 1000);
  const milliseconds = elapsed - (seconds * 1000);
  return (seconds + "s " + milliseconds + "ms");
}

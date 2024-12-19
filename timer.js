const waitTime = 3000; //3 seconds or 3000 miliseconds;

console.log(`setting a ${waitTime / 1000} seconds delay`);
const timerFinish = () => {
  clearInterval(interval);
  console.log(`done`);
};

setTimeout(timerFinish, waitTime);

const waitInterval = 500;

let currentTime = 0;

const incrementTime = () => {
  currentTime += waitInterval;
  process.stdout.write(`\n waiting ${currentTime / 1000} seconds`);
};

const interval = setInterval(incrementTime, waitInterval);

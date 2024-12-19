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
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`\n waiting... ${p} % `);
};

const interval = setInterval(incrementTime, waitInterval);

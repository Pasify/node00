let count = 0;

const increment = () => ++count;
const decrement = () => --count;
const getCount = () => count;
module.exports = {
  anything: true,
  person: "jon doe",
  count,
  increment,
  decrement,
  getCount,
};

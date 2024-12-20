const { increment, decrement, getCount } = require("./modules");

increment();
increment();
increment();
console.log(` the count is ${getCount()}`);

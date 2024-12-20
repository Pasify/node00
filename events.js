const events = require("node:events");

let emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

emitter.emit("customEvent", "hello world", "computer");
emitter.emit("customEvent", "its nothing", "paskkal");

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit("customEvent", "GoodBye!", "process");
    process.exit();
  }
  emitter.emit("customEvent", data.toString().trim(), "terminal");
});

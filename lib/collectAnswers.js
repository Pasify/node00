const readline = require("node:readline");
const { EventEmitter } = require("node:events");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
module.exports = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;
  const emitter = new EventEmitter();
  const questionAnswered = (answer) => {
    emitter.emit("answer", answer);
    answers.push(answer.trim());
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      return done(answers);
    }
  };
  rl.question(firstQuestion, questionAnswered);

  return emitter;
};

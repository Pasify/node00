const path = require("node:path");
const readline = require("node:readline");
const v8 = require("node:v8");
console.log(path.basename(__filename));
let dirUploads = path.join(__dirname, "www", "files", "uploads");

// console.log(dirUploads);
// console.log(v8.getHeapStatistics());

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "what is your name?",
  "where do you live?",
  "what are you going to do with node js?",
];

function collectAnswers(questions, done) {
  const answers = [];
  const questionAnswered = (answer) => {
    answers.push(answer.trim());
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      return done(answers);
    }
  };
  rl.question(questions[0], questionAnswered);
}
collectAnswers(questions, (answers) => {
  console.log(`thank you for your answers !`);
  console.log(answers);
  rl.close();
});

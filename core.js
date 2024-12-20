const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "what is your name?",
  "where do you live?",
  "what are you going to do with node js?",
];
const answersEvent = collectAnswers(questions, (answers) => {
  console.log(`thank you for your answers !`);
  console.log(answers);
  process.exit();
});

answersEvent.on("answer", (answer) => console.log(`the answer is ${answer}`));

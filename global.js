const questions = [
  "what is your name?",
  "what would ypu rather be doing",
  "what is your preffered programming language",
];
const answers = [];

function ask(questionsIndex = 0) {
  process.stdout.write(`\n ${questions[questionsIndex]}`);
  process.stdout.write(` > `);
}
ask();
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  process.stdout.write(`\n\n`);
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]}, you can finish writing ${answers[2]}`
  );
});

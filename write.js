const fs = require("node:fs");

let md = `
    This is a new file
    ==================

    ES6 Template string are cool , they honor white spaces

    * Template strings
    * Node files System
    *ReadLine CLIs

`;

fs.writeFile("js.md", md.trim(), (err) => {
  if (err) {
    throw err;
  }
  fs.appendFileSync("js.md", "\n\n## Everyone Node.js is awesome");
  console.log(`Markdown file created`);
});

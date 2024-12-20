const fs = require("node:fs");

fs.readFile("./readme.md", "UTF-8", (error, file) => {
  if (error) {
    throw error;
  } else {
    console.log(file);
  }
});
console.log(`reading the file.....`);

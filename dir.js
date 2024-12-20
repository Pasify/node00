const fs = require("node:fs");

if (fs.existsSync("storage-files")) {
  console.log(`The Directory already exists`);
  return;
} else {
  fs.mkdir("storage-files", (err) => {
    if (err) {
      console.log(`ERROR: ${err}`);
    } else {
      console.log(`Directory created`);
    }
  });
}

// renaming a  file

fs.renameSync("js.md", "javascript.md", (error) => {
  if (error) {
    console.log(`ERROR:${error}`);
  } else {
    console.log(`file name has been changed`);
  }
});

fs.unlinkSync("javascript.md", (error) => {
  if (error) {
    console.log(`ERROR:${error}`);
  } else {
    console.log(`file has been deleted`);
  }
});

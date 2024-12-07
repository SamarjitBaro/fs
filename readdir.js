const fs = require("fs");

fs.readdir("hello", { withFileTypes: true }, (err, file) => {
  if (err) {
    console.log(err);
  } else {
    console.log(file);
  }
});

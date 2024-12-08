const fs = require("fs");
fs.mkdir("hello", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("cleared");
  }
});

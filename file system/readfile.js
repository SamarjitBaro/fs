const fs = require("fs");

fs.readFile("hello.html", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

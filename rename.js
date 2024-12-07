const fs = require("fs");

fs.rename("example.txt", "ex.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("done");
  }
});

const fs = require("fs");
fs.unlink("oi.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("done");
  }
});

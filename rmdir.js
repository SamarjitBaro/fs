const fs = require("fs");
fs.rm("ene", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("done");
  }
});

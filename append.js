const fs = require("fs");

const obj = {
  nasd: "heelo",
};

const users = JSON.stringify(obj, null, 2);

fs.appendFile("example.txt", users, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("appended");
  }
});

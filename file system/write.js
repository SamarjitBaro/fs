const file = require("fs");

const obj = {
  name: "samar",
  age: 26,
  food: "non-veg",
};
const objects = JSON.stringify(obj, null, 2);

file.writeFile("example.txt", objects, (error) => {
  if (error) {
    console.log("error occured");
  } else {
    console.log("file created");
  }
});

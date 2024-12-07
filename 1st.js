function server() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("connecting...");
    }, 1000);
  });
}

function course() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["course1", "course2", "course3"]);
    }, 1000);
  });
}
function course2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["data1", "data2", "data3"]);
    }, 3000);
  });
}

server()
  .then((res) => {
    console.log(res);
    return course();
  })
  .then((data) => {
    console.log(data);
    return course2();
  })
  .then((c2) => {
    console.log(c2);
  });

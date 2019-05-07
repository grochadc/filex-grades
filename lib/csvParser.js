const fs = require("fs");
const readline = require("readline");

const stream = fs.createReadStream("./data/grades.csv");

const lineReader = readline.createInterface({ input: stream });

let headers = [];
const students = {};
let lineIndex = 0;

lineReader.on("line", line => {
  const studentArr = line.split(",");
  if (lineIndex === 0) {
    headers = studentArr;
  } else {
    const studentObj = {};
    headers.forEach((item, index) => (studentObj[item] = studentArr[index]));
    students[studentObj.codigo] = studentObj;
  }

  lineIndex++;
});

lineReader.on("close", () => {
  fs.writeFile("./data/grades.json", JSON.stringify(students), () =>
    console.log("File written")
  );
});

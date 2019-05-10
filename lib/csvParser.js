const fs = require("fs");
const readline = require("readline");

const stream = fs.createReadStream("./data/grades.csv");

const lineReader = readline.createInterface({ input: stream });

const generateID = () =>
  `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;

let headers = [];
const students = [];
const externalStudents = [];
let lineIndex = 0;

lineReader.on("line", line => {
  const studentArr = line.split(",");
  if (lineIndex === 0) {
    headers = studentArr;
  } else {
    const studentObj = {};
    headers.forEach((item, index) => (studentObj[item] = studentArr[index]));
    if (studentObj.codigo.search("EXTERNO") > -1) {
      studentObj.codigo = `EXTERNO${generateID()}`;
      externalStudents.push(studentObj);
    }
    students.push(studentObj);
  }

  lineIndex++;
});

lineReader.on("close", () => {
  let data = { grades: students, external: externalStudents };
  fs.writeFile("./data/grades.json", JSON.stringify(data), () =>
    console.log("File written")
  );
});

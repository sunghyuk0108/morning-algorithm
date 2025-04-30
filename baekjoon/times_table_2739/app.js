// fs module 방식 / 백준 경로 '/dev/stdin'
const fs = require("fs");

const [a] = fs.readFileSync("../input.txt").toString().split(" ").map(Number);

const timesTableNum = 9;

const getTimesTable = () => {
  for (let i = 1; i < 10; i++) {
    const multiple = a * i;
    console.log(`${a} * ${i} = ${multiple}`);
  }
};

getTimesTable();

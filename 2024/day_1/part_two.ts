import { readFileSync } from "fs";

const input = readFileSync("./2024/day_1/input.txt").toString().split("\n");

const col1 = input.map((line) => Number(line.split("   ")[0]));
const col2 = input.map((line) => Number(line.split("   ")[1]));

const similarityScore = col1.reduce((acc, num) => {
  return acc + col2.filter((n) => n === num).length * num;
}, 0);

console.log(similarityScore);

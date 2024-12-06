import { readFileSync } from "fs";

const input = readFileSync("./2024/day_1/input.txt").toString().split("\n");

const col1 = input.map((line) => Number(line.split("   ")[0]));
const col2 = input.map((line) => Number(line.split("   ")[1]));
const sortedCol1 = col1.sort();
const sortedCol2 = col2.sort();

let diff = 0;
for (let i = 0; i < sortedCol1.length; i++) {
  diff += Math.abs(sortedCol1[i] - sortedCol2[i]);
  console.log(sortedCol1[i], sortedCol2[i]);
}

console.log(diff);

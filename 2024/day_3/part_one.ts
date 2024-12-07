import { readFileSync } from "fs";

const input = readFileSync("./2024/day_3/input.txt").toString();

const mulRegex = /mul\((\d+),(\d+)\)/g;
const mulMatches = input.matchAll(mulRegex);

let sum = 0;
for (const match of mulMatches) {
  sum += parseInt(match[1]) * parseInt(match[2]);
}

console.log(sum);

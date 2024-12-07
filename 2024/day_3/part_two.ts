import { readFileSync } from "fs";

const multiplyFromInstruction = (instruction: string): number => {
  const match = instruction.match(/\d+/g);
  let a: number, b: number;
  if (match) {
    [a, b] = match.map(Number);
    return a * b;
  }
  return 0;
};

const input = readFileSync("./2024/day_3/input.txt").toString();
// match all instructions in sequential order
const instructions = input.match(/(mul\(\d+,\d+\)|do\(\)|don't\(\))/g);

let sum = 0;
let enabled = true;

if (!instructions || instructions.length === 0) {
  throw new Error("No instructions found");
}

for (const instruction of instructions) {
  if (enabled && instruction.startsWith("mul")) {
    sum += multiplyFromInstruction(instruction);
  } else if (instruction === "do()") {
    enabled = true;
  } else if (instruction === "don't()") {
    enabled = false;
  }
}

console.log(sum);

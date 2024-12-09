import { readFileSync } from "fs";

const input = readFileSync("./2024/day_7/input.txt", "utf-8").split("\n");

const operations = input.map((line) => {
  const objective = line.split(": ")[0];
  const numbers = line.split(": ")[1].split(" ");
  return {
    objective: Number(objective),
    numbers: numbers.map((value) => Number(value)),
  };
});

function testOut(numbers: number[], objective: number): number {
  if (numbers.length === 1) {
    return numbers[0] === objective ? numbers[0] : 0;
  }

  const first = numbers[0];
  const rest = numbers.slice(1);

  const plus = testOut([first + rest[0], ...rest.slice(1)], objective);
  const times = testOut([first * rest[0], ...rest.slice(1)], objective);

  return plus || times;
}

const result = operations
  .map((operation) => testOut(operation.numbers, operation.objective))
  .reduce((acc, curr) => acc + curr, 0);

console.log(result);

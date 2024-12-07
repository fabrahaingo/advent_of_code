import { readFileSync } from "fs";

const input = readFileSync("./2024/day_5/input.txt", "utf-8").split("\n");

const rules = input.slice(0, input.indexOf("")).map((rule) => rule.split("|"));
const updates = input
  .slice(input.indexOf("") + 1)
  .map((update) => update.split(","));

const order = (a: string, b: string) => {
  return rules.some(([x, y]) => x === a && y === b);
};
const isOrdered = (update: string[]) => {
  for (let i = 0; i < update.length - 1; i++) {
    if (!order(update[i], update[i + 1])) return false;
  }
  return true;
};
const middlePage = (update: string[]) => {
  const middle = Math.floor(update.length / 2);
  return update[middle];
};

const unorderedUpdates = updates.filter((update) => !isOrdered(update));
const orderedUpdates = unorderedUpdates.map((update) => {
  return update.sort((a, b) => {
    if (order(a, b)) return -1;
    if (order(b, a)) return 1;
    return 0;
  });
});
const middlePages = orderedUpdates.map(middlePage);
const sum = middlePages.reduce((acc, page) => acc + parseInt(page), 0);
console.log(sum);

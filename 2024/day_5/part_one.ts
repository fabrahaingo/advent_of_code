import { readFileSync } from "fs";

const input = readFileSync("./2024/day_5/input.txt", "utf8").split("\n");

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
  return update[Math.floor(update.length / 2)];
};

const orderedUpdates = updates.filter(isOrdered);
const middlePages = orderedUpdates.map(middlePage);

console.log(middlePages.reduce((acc, page) => acc + Number(page), 0));

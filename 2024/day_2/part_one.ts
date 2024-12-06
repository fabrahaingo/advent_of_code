import { readFileSync } from "fs";

const data = readFileSync("./2024/day_2/input.txt", "utf8").split("\n");

const isDiffSafe = (lvl1: number, lvl2: number): boolean => {
  const diff = Math.abs(lvl1 - lvl2);
  return diff > 0 && diff < 4;
};

const containsBigDiff = (levels: number[]): boolean => {
  for (let i = 0; i < levels.length - 1; i++) {
    if (!isDiffSafe(levels[i], levels[i + 1])) {
      return true;
    }
  }
  return false;
};

const isConstantlyIncreasing = (levels: number[]): boolean => {
  for (let i = 0; i < levels.length - 1; i++) {
    if (levels[i] > levels[i + 1]) {
      return false;
    }
  }
  return true;
};

const isConstantlyDecreasing = (levels: number[]): boolean => {
  for (let i = 0; i < levels.length - 1; i++) {
    if (levels[i] < levels[i + 1]) {
      return false;
    }
  }
  return true;
};

let safeReports = 0;
for (const line of data) {
  const levels = line.split(" ").map((lvl) => parseInt(lvl));
  if (!isConstantlyIncreasing(levels) && !isConstantlyDecreasing(levels)) {
    continue;
  }
  if (containsBigDiff(levels)) {
    continue;
  }
  safeReports++;
}

console.log(safeReports);

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

const isLevelSafe = (levels: number[]): boolean => {
  return (
    (isConstantlyIncreasing(levels) || isConstantlyDecreasing(levels)) &&
    !containsBigDiff(levels)
  );
};

let safeReports1 = 0;
let safeReports2 = 0;
for (const line of data) {
  const levels = line.split(" ").map((lvl) => parseInt(lvl));
  if (isLevelSafe(levels)) {
    safeReports1++;
  } else {
    // remove levels one by one and check if safe
    for (let i = 0; i < levels.length; i++) {
      const levelsCopy = [...levels];
      levelsCopy.splice(i, 1);
      if (isLevelSafe(levelsCopy)) {
        safeReports2++;
        break;
      }
    }
  }
}

console.log(safeReports1);
console.log(safeReports2 + safeReports1);

import { readFileSync } from "fs";

const input = readFileSync("./2024/day_4/input.txt", "utf-8");
const lines = input.split("\n");

const word = "MAS";
let count = 0;

const isWord = (word: string, letters: string) => {
  return letters === word || letters.split("").reverse().join("") === word;
};
const getDiag1 = (i: number, j: number) => {
  return `${lines[i - 1]?.[j - 1] || ""}A${lines[i + 1]?.[j + 1] || ""}`;
};
const getDiag2 = (i: number, j: number) => {
  return `${lines[i - 1]?.[j + 1] || ""}A${lines[i + 1]?.[j - 1] || ""}`;
};

// first find A's. Once we find an A, we can check if both diagonals form the word MAS either forward or backward

for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines[i].length; j++) {
    if (lines[i][j] === "A") {
      const diagonal1 = getDiag1(i, j);
      const diagonal2 = getDiag2(i, j);
      if (isWord(word, diagonal1) && isWord(word, diagonal2)) {
        count++;
      }
    }
  }
}

console.log(count);

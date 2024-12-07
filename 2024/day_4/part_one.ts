import { readFileSync } from "fs";

const input = readFileSync("./2024/day_4/input.txt", "utf-8");
const lines = input.split("\n");

const word = "XMAS";
let count = 0;

const isWord = (word: string, letters: string) => {
  return letters === word || letters.split("").reverse().join("") === word;
};

for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines[i].length; j++) {
    let horizontal = lines[i].slice(j, j + word.length);
    if (isWord(word, horizontal)) {
      count++;
    }
    let vertical = "";
    let diagonal1 = "";
    let diagonal2 = "";
    for (let k = 0; k < lines.length; k++) {
      if (i + k < lines.length) {
        vertical += lines[i + k][j];
        if (isWord(word, vertical)) {
          count++;
        }
      }
      if (i + k < lines.length && j + k < lines[i].length) {
        diagonal1 += lines[i + k][j + k];
        if (isWord(word, diagonal1)) {
          count++;
        }
      }
      if (i - k >= 0 && j + k < lines[i].length) {
        diagonal2 += lines[i - k][j + k];
        if (isWord(word, diagonal2)) {
          count++;
        }
      }
    }
  }
}

console.log(count);

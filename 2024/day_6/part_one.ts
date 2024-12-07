import { readFileSync } from "fs";

const input = readFileSync("./2024/day_6/input.txt", "utf-8").split("\n");

const map = input.map((row) => row.split(""));
const visited = new Set();

const findStart = (map: string[][]): number[] => {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "^") {
        return [i, j];
      }
    }
  }
  return [0, 0];
};

let direction = "up";
let [y, x] = findStart(map);

while (true) {
  visited.add(`${x},${y}`);

  if (direction === "up") {
    y--;
    if (map[y][x] === "#") {
      direction = "right";
      y++;
    }
  } else if (direction === "right") {
    x++;
    if (map[y][x] === "#") {
      direction = "down";
      x--;
    }
  } else if (direction === "down") {
    y++;
    if (map[y][x] === "#") {
      direction = "left";
      y--;
    }
  } else if (direction === "left") {
    x--;
    if (map[y][x] === "#") {
      direction = "up";
      x++;
    }
  }

  if (x < 0 || y < 0 || x >= map[0].length || y >= map.length) {
    break;
  }
}

console.log(visited.size);

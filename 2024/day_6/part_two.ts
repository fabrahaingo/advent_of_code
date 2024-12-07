import { readFileSync } from "fs";

const input = readFileSync("./2024/day_6/input.txt", "utf-8").split("\n");
const map = input.map((row) => row.split(""));

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

let [y, x] = findStart(map);

const moveGuard = (
  map: string[][],
  direction: string,
  x: number,
  y: number
): boolean => {
  const visited = new Set();
  const isOutOfBounds = (x: number, y: number) =>
    x < 0 || y < 0 || x >= map[0].length || y >= map.length;
  const isObstacle = (x: number, y: number) => map[y][x] === "#";

  while (true) {
    visited.add(`${x},${y},${direction}`);
    if (direction === "up") {
      y--;
      if (isOutOfBounds(x, y)) return false;
      if (isObstacle(x, y)) {
        direction = "right";
        y++;
      }
    } else if (direction === "right") {
      x++;
      if (isOutOfBounds(x, y)) return false;
      if (isObstacle(x, y)) {
        direction = "down";
        x--;
      }
    } else if (direction === "down") {
      y++;
      if (isOutOfBounds(x, y)) return false;
      if (isObstacle(x, y)) {
        direction = "left";
        y--;
      }
    } else if (direction === "left") {
      x--;
      if (isOutOfBounds(x, y)) return false;
      if (isObstacle(x, y)) {
        direction = "up";
        x++;
      }
    }
    if (visited.has(`${x},${y},${direction}`)) {
      return true;
    }
  }
};

// loop through the map and find all possible obstructions
let possibleObstructions = 0;

for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    if (map[i][j] === ".") {
      map[i][j] = "#";
      if (moveGuard(map, "up", x, y)) {
        possibleObstructions++;
      }
      map[i][j] = ".";
    }
  }
}

console.log(possibleObstructions);

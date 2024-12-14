import { readFileSync } from "fs";

const input = readFileSync("./2024/day_8/input.txt", "utf8").split("\n");

const antennas = input.map((row) => row.split(""));
const antinodeLocations = new Set();

const getAntinodeLocations = (antennas) => {
  const greatestCommonDivider = (a, b) =>
    b === 0 ? Math.abs(a) : greatestCommonDivider(b, a % b);

  for (let i = 0; i < antennas.length; i++) {
    for (let j = 0; j < antennas[i].length; j++) {
      if (antennas[i][j] === ".") continue;

      for (let k = 0; k < antennas.length; k++) {
        for (let l = 0; l < antennas[k].length; l++) {
          // store following id condition as const
          const isNotAntenna =
            antennas[k][l] !== antennas[i][j] || (i === k && j === l);
          if (isNotAntenna) continue;

          let dir1 = k - i,
            dir2 = l - j;
          const gcd = greatestCommonDivider(dir1, dir2);
          dir1 /= gcd;
          dir2 /= gcd;

          for (
            let row = i, column = j;
            row >= 0 &&
            row < antennas.length &&
            column >= 0 &&
            column < antennas[0].length;
            row += dir1, column += dir2
          ) {
            antinodeLocations.add(`${row},${column}`);
          }

          for (
            let row = i - dir1, column = j - dir2;
            row >= 0 &&
            row < antennas.length &&
            column >= 0 &&
            column < antennas[0].length;
            row -= dir1, column -= dir2
          ) {
            antinodeLocations.add(`${row},${column}`);
          }
        }
      }
    }
  }
};

getAntinodeLocations(antennas);
console.log(antinodeLocations.size);

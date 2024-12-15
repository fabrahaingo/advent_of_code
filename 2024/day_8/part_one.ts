import { readFileSync } from "fs";

const input = readFileSync("./2024/day_8/input.txt", "utf8").split("\n");

const antennas = input.map((row) => row.split(""));
const antinodeLocations = new Set();

const getAntinodeLocations = (antennas: string[][]) => {
  for (let i = 0; i < antennas.length; i++) {
    for (let j = 0; j < antennas[i].length; j++) {
      if (antennas[i][j] === ".") continue;
      for (let k = 0; k < antennas.length; k++) {
        for (let l = 0; l < antennas[k].length; l++) {
          if (antennas[k][l] === ".") continue;
          if (i === k && j === l) continue;
          if (antennas[i][j] === antennas[k][l]) {
            const coordinates = [i + (i - k), j + (j - l)];
            if (
              coordinates[0] >= 0 &&
              coordinates[0] < antennas.length &&
              coordinates[1] >= 0 &&
              coordinates[1] < antennas[0].length
            ) {
              antinodeLocations.add(coordinates.join(","));
            }
          }
        }
      }
    }
  }
  return antinodeLocations.size;
};

console.log(getAntinodeLocations(antennas));

import * as readline from "readline";
import * as fs from "fs";

const file = "./input.txt";
const pointer = readline.createInterface({
  input: fs.createReadStream(file),
});

const data: string[][] = [];
let sum: number = 0;

pointer.on("line", function (text: string) {
  data.push(text.split(""));
});

pointer.on("close", () => {
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data?.[i].length; j++) {
      if (data[i][j] === "X")
        sum =
          sum +
          LookForM(i, j - 1) +
          LookForM(i, j + 1) +
          LookForM(i - 1, j) +
          LookForM(i + 1, j);
    }
  }

  console.log(sum);
});

function LookForM(i: number, j: number): number {
  return (
    LookForA(i - 1, j) +
    LookForA(i + 1, j) +
    LookForA(i, j - 1) +
    LookForA(i, j + 1)
  );
}

function LookForA(i: number, j: number): number {
  if ((data?.[i - 1]?.[j] ?? null) === "A") return LookForS(i - 1, j);
  if ((data?.[i + 1]?.[j] ?? null) === "A") return LookForS(i + 1, j);
  if ((data?.[i]?.[j - 1] ?? null) === "A") return LookForS(i, j - 1);
  if ((data?.[i]?.[j + 1] ?? null) === "A") return LookForS(i, j + 1);
  return false;
}

function LookForS(i: number, j: number): number {
  return (
    (data?.[i]?.[j + 1] ?? null) === "S" ||
    (data?.[i - 1]?.[j] ?? null) === "S" ||
    (data?.[i + 1]?.[j] ?? null) === "S" ||
    (data?.[i]?.[j - 1] ?? null) === "S"
  );
}

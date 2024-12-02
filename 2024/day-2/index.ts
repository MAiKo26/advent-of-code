import * as readline from "readline";
import * as fs from "fs";

const file = "./input.txt";
const pointer = readline.createInterface({
  input: fs.createReadStream(file),
});

const Array: string[][] = [];

pointer.on("line", function (text: string) {
  Array.push(text.split(" "));
});

pointer.on("close", () => {
  let sum = 0;
  for (let i = 0; i < Array.length; i++) {
    sum = sum + CompareLevel(Array[i]);
  }
  console.log(sum);
});

function CompareLevel(Arr: string[], count = 0): 1 | 0 {
  let order = 0;

  for (let j = 0; j < Arr.length - 1; j++) {
    const C = Number(Arr[j]) - Number(Arr[j + 1]);
    const A = Math.abs(C);
    if (C > 0) order++;
    if (C < 0) order--;

    if (A > 3 || A < 1) return 0;
  }

  if (Arr.length - 1 !== Math.abs(order)) return 0;

  return 1;
}

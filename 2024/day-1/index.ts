import * as readline from "readline";
import * as fs from "fs";

const file = "./input.txt";
const pointer = readline.createInterface({
  input: fs.createReadStream(file),
});

const ListA: number[] = [];
const ListB: number[] = [];

pointer.on("line", function (text: string) {
  ListA.push(Number(text.trim().split("   ")[0]));
  ListB.push(Number(text.trim().split("   ")[1]));
});

let sum = 0;
let sum2 = 0;

pointer.on("close", () => {
  ListA.sort();
  ListB.sort();

  ListA.map((item, index) => {
    sum = sum + Math.abs(item - ListB[index]);
  });

  for (let i = 0; i < ListA.length - 1; i++) {
    let h = 0;
    for (let j = 0; j < ListB.length; j++) {
      if (ListA[i] === ListB[j]) h++;
    }
    sum2 = sum2 + ListA[i] * h;
  }

  console.log(sum);
  console.log(sum2);
});

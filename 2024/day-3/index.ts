import * as readline from "readline";
import * as fs from "fs";

const file = "./input.txt";
const pointer = readline.createInterface({
  input: fs.createReadStream(file),
});

let data: string = "";
let sum: number = 0;

pointer.on("line", function (text: string) {
  data = data + text;
});

pointer.on("close", () => {
  const data2 = [...data.replaceAll(/don't\(\).+do\(\)/g, "")].join("");
  const array = [...data2.matchAll(/mul\([0-9]+,[0-9]+\)/g)];

  for (let i = 0; i < array.length; i++) {
    const array2 = array[i]
      .join("")
      .replace("mul(", "")
      .replace(")", "")
      .split(",");
    sum = sum + Number(array2[0]) * Number(array2[1]);
  }
  console.log(sum);
});

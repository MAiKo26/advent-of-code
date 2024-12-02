const fs = require("fs");
const readline = require("readline");
var file = "./input.txt";
var pointer = readline.createInterface({
  input: fs.createReadStream(file),
});

const ListA: number[] = [];
const ListB: number[] = [];

pointer.on("line", function (text: string) {
  ListA.push(Number(text.trim().split("   ")[0]));
  ListB.push(Number(text.trim().split("   ")[1]));

  console.log(ListA);
  console.log(ListB);
});

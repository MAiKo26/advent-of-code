const fs = require("fs");
const readline = require("readline");

var file = "./input.txt";

var pointer = readline.createInterface({
  input: fs.createReadStream(file),
});
var array = [];
pointer.on("line", function (text) {
  array.push(text.split(" "));
});

var lucky = [];
pointer.on("close", function () {
  console.log(array);
  lucky = array[Math.floor(Math.random() * array.length)];
  console.log(lucky);
});

// Give up

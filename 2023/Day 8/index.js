const fs = require("fs");
const readline = require("readline");

var file = "./input.txt";

const Instructions =
  "LRRRLRRLRLRRRLRLLLLRRRLRLRRLRLRLRRLRRRLRRLRRRLRLLLRRLRRLRRLRRLRRLLLLLRLRLRRRLRLLRRLRLRRRLRRLRRRLLLRRLRRLRRLRRRLRLRLRRLLRRRLRRLRRRLRRRLRRRLRLRRLRRLRRLRRRLRLRRLRRLLRRRLRRLRRLRRRLRLRLRRLLRRRLLRRLRRRLRRRLRLRRLLRRRLRLRRLLRRLRLRRRLRLRRRLRRLRRLRRLRRRLRRRLRLLRRLRRLLRRLRRRLRRLRLRLRRRLLLRRLRLRRLRRLRLRLLRLRRLRLRLRRRR";

var pointer = readline.createInterface({
  input: fs.createReadStream(file),
});

function modifyInput(arrayInput) {
  const resultArray = arrayInput.map((item) =>
    item.replace(/\(|\)|\s/g, "").split("=")
  );
  return resultArray;
}

var arrayInput = [];

pointer.on("line", function (text) {
  arrayInput.push(text);
});

pointer.on("close", function () {
  var arrayInput2 = modifyInput(arrayInput);
  var currentLocation = ["AAA", "XXL, DRR"];
  var count = 0;
  console.log("Initial Location", currentLocation);
  while (currentLocation[0] !== "ZZZ") {
    count++;
    for (let i = 0; i < Instructions.length; i++) {
      console.log("---------------------------------");
      console.log("current instruction is to go ", Instructions[i]);
      if (Instructions[i] === "L") {
        var modified = false;
        console.log("Entered Left");
        for (let j = 0; j < arrayInput2.length; j++) {
          if (
            arrayInput2[j][0] === currentLocation[1].split(",")[0] &&
            !modified
          ) {
            currentLocation = arrayInput2[j];
            console.log("after Left", currentLocation);
            modified = true;
          }
        }
      } else {
        var modified = false;

        console.log("Entered Right");
        for (let j = 0; j < arrayInput2.length; j++) {
          if (
            arrayInput2[j][0] === currentLocation[1].split(",")[1] &&
            !modified
          ) {
            currentLocation = arrayInput2[j];
            console.log("After right", currentLocation);
            modified = true;
          }
        }
      }
    }
    console.log("---------------------------------------------");
  }
  console.log("Final Result", currentLocation);
  console.log("Count", count * Instructions.length);
});

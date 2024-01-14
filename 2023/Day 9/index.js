const fs = require("fs");
const readline = require("readline");

var file = "./input.txt";

var pointer = readline.createInterface({
  input: fs.createReadStream(file),
});

function recursiveZero(X) {
  var total = 0;
  X.map((element, index) => {
    total = total + element;
  });
  if (total == 0) {
    return X.length;
  } else {
    for (i = 0; i < X.length; i++) {
      X[i] = X[i + 1] - X[i];
    }

    if (X[X.length] === undefined) X.pop();

    return recursiveZero(X);
  }
}

pointer.on("line", function (text) {
  console.log(text);
  const Array = text.split(" ");
  console.log(Array);

  console.log("Here", recursiveZero(Array));
});

pointer.on("close", function () {});

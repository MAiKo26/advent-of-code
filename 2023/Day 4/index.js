const fs = require("fs");
const readline = require("readline");

var file = "./input.txt";

var pointer = readline.createInterface({
  input: fs.createReadStream(file),
});
var sum = 0;

function Split1(text) {
  return text.split(":");
}

function Split2(text) {
  return text.split("|");
}

function Split3(text) {
  return text.split(" ");
}

function searchNumber(array1, array2) {
  var cardCounter = 0;

  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        if (cardCounter == 0) {
          cardCounter = 1;
        } else {
          cardCounter = cardCounter * 2;
        }
      }
    }
  }
  return cardCounter;
}

function searchNumber2(array1, array2) {
  var cardCounter = 0;

  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        cardCounter++;
      }
    }
  }
  return cardCounter;
}

pointer.on("line", function (text) {
  var Card = Split1(text);
  var AllNumbers = Split2(Card[1]);
  var winningNumbers = Split3(AllNumbers[0]).filter((i) => i !== "");
  var myNumbers = Split3(AllNumbers[1]).filter((i) => i !== "");

  sum = sum + searchNumber(winningNumbers, myNumbers);

  //   console.log(Card[0], " ", sum);
});
var index = 2;
var InitialArray = new Array(206).fill(1);

pointer.on("line", function (text) {
  var Card = Split1(text);
  var AllNumbers = Split2(Card[1]);
  var winningNumbers = Split3(AllNumbers[0]).filter((i) => i !== "");
  var myNumbers = Split3(AllNumbers[1]).filter((i) => i !== "");
  var placeholder = searchNumber2(winningNumbers, myNumbers);
  //   console.log(InitialArray.length);
  for (var i = index; i < InitialArray.length; i++) {
    if (placeholder > 0) {
      InitialArray[i] = InitialArray[i] + 1 * InitialArray[index - 1];
      //   console.log(
      //     "found ",
      //     placeholder,
      //     " and added these ",
      //     Card[0],
      //     " 's numbers to ",
      //     i,
      //     " and it became ",
      //     InitialArray[i]
      //   );
      placeholder--;
    }
  }
  index++;

  //   console.log("Result  ", InitialArray);
  var sum2 = 0;

  for (var i = 0; i < InitialArray.length; i++) {
    sum2 += InitialArray[i];
  }
  console.log(InitialArray);
  console.log(sum2 - 1);
});

const fs = require("fs");
const readline = require("readline");
var file = "./data.txt";
var pointer = readline.createInterface({
  input: fs.createReadStream(file),
});
var sum = 0;

function searchWord(text) {
  for (var i = 0; i < text.length; i++) {
    if (
      text[i] == "o" &&
      text[i + 1] == "n" &&
      text[i + 2] == "e" &&
      text.length > 3
    ) {
      return {number: 1, index: i};
    }
    if (
      text[i] == "t" &&
      text[i + 1] == "w" &&
      text[i + 2] == "o" &&
      text.length > 3
    ) {
      return {number: 2, index: i};
    }
    if (
      text[i] == "t" &&
      text[i + 1] == "h" &&
      text[i + 2] == "r" &&
      text[i + 3] == "e" &&
      text[i + 4] == "e" &&
      text.length > 5
    ) {
      return {number: 3, index: i};
    }
    if (
      text[i] == "f" &&
      text[i + 1] == "o" &&
      text[i + 2] == "u" &&
      text[i + 3] == "r" &&
      text.length > 4
    ) {
      return {number: 4, index: i};
    }
    if (
      text[i] == "f" &&
      text[i + 1] == "i" &&
      text[i + 2] == "v" &&
      text[i + 3] == "e" &&
      text.length > 4
    ) {
      return {number: 5, index: i};
    }
    if (
      text[i] == "s" &&
      text[i + 1] == "i" &&
      text[i + 2] == "x" &&
      text.length > 3
    ) {
      return {number: 6, index: i};
    }
    if (
      text[i] == "s" &&
      text[i + 1] == "e" &&
      text[i + 2] == "v" &&
      text[i + 3] == "e" &&
      text[i + 4] == "n" &&
      text.length > 5
    ) {
      return {number: 7, index: i};
    }
    if (
      text[i] == "e" &&
      text[i + 1] == "i" &&
      text[i + 2] == "g" &&
      text[i + 3] == "h" &&
      text[i + 4] == "t" &&
      text.length > 5
    ) {
      return {number: 8, index: i};
    }
    if (
      text[i] == "n" &&
      text[i + 1] == "i" &&
      text[i + 2] == "n" &&
      text[i + 3] == "e" &&
      text.length > 4
    ) {
      return {number: 9, index: i};
    }
  }
}

function searchWord2(text) {
  for (var i = text.length - 1; i >= 0; i--) {
    if (
      text[i] == "e" &&
      text[i - 1] == "n" &&
      text[i - 2] == "o" &&
      text.length > 3
    ) {
      return {number: 1, index: i};
    }
    if (
      text[i] == "o" &&
      text[i - 1] == "w" &&
      text[i - 2] == "t" &&
      text.length > 3
    ) {
      return {number: 2, index: i};
    }
    if (
      text[i] == "e" &&
      text[i - 1] == "e" &&
      text[i - 2] == "r" &&
      text[i - 3] == "h" &&
      text[i - 4] == "t" &&
      text.length > 5
    ) {
      return {number: 3, index: i};
    }
    if (
      text[i] == "r" &&
      text[i - 1] == "u" &&
      text[i - 2] == "o" &&
      text[i - 3] == "f" &&
      text.length > 4
    ) {
      return {number: 4, index: i};
    }
    if (
      text[i] == "e" &&
      text[i - 1] == "v" &&
      text[i - 2] == "i" &&
      text[i - 3] == "f" &&
      text.length > 4
    ) {
      return {number: 5, index: i};
    }
    if (
      text[i] == "x" &&
      text[i - 1] == "i" &&
      text[i - 2] == "s" &&
      text.length > 3
    ) {
      return {number: 6, index: i};
    }
    if (
      text[i] == "n" &&
      text[i - 1] == "e" &&
      text[i - 2] == "v" &&
      text[i - 3] == "e" &&
      text[i - 4] == "s" &&
      text.length > 5
    ) {
      return {number: 7, index: i};
    }
    if (
      text[i] == "t" &&
      text[i - 1] == "h" &&
      text[i - 2] == "g" &&
      text[i - 3] == "i" &&
      text[i - 4] == "e" &&
      text.length > 5
    ) {
      return {number: 8, index: i};
    }
    if (
      text[i] == "e" &&
      text[i - 1] == "n" &&
      text[i - 2] == "i" &&
      text[i - 3] == "n" &&
      text.length > 4
    ) {
      return {number: 9, index: i};
    }
  }
}

function search(text) {
  for (var i = 0; i < text.length; i++) {
    if (parseInt(text[i], 10) >= 0) {
      return {number: parseInt(text[i], 10), index: i};
    }
  }
}

function search2(text) {
  for (var i = text.length - 1; i >= 0; i--) {
    if (parseInt(text[i], 10) >= 0) {
      return {number: parseInt(text[i], 10), index: i};
    }
  }
}

pointer.on("line", function (text) {
  console.log(text);
  var k = search(text);
  var h = search2(text);
  var m = searchWord(text);
  var n = searchWord2(text);
  console.log("sreach number left ", k);
  console.log("search word left ", m);
  console.log("");
  console.log("search number right ", h);
  console.log("sreachh word right ", n);

  console.log(text);
  var x = 0;
  var part1 = k?.number || 0;
  var part2 = n?.number || 0;
  if (m != undefined) {
    if (k != undefined) {
      part1 = k.index < m.index ? k.number : m.number;
    } else {
      part1 = m.number;
    }
  }
  if (h != undefined) {
    if (n != undefined) {
      part2 = h.index > n.index ? h.number : n.number;
    } else {
      part2 = h.number;
    }
  }

  console.log(part1);
  console.log(part2);
  x = part1 + "" + part2;

  sum = sum + parseInt(x, 10);
  console.log(sum);
});

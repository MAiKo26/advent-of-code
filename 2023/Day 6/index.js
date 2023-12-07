input1 = [
  {
    time: 7,
    distance: 9,
  },
  {
    time: 15,
    distance: 40,
  },
  {
    time: 30,
    distance: 200,
  },
];

input2 = [
  {
    time: 38,
    distance: 241,
  },
  {
    time: 94,
    distance: 1549,
  },
  {
    time: 79,
    distance: 1074,
  },
  {
    time: 70,
    distance: 1091,
  },
];

input3 = [
  {
    time: 38947970,
    distance: 241154910741091,
  },
];

function calculatePossibleWays(race) {
  let possibleWays = [];
  for (let i = 1; i < race.time - 1; i++) {
    if (i * (race.time - i) > race.distance) {
      possibleWays.push(i * (race.time - i));
    }
  }
  return possibleWays.length;
}

var sum = 1;
for (let i = 0; i < input3.length; i++) {
  sum = sum * calculatePossibleWays(input3[i]);
  console.log(sum);
}

const fs = require("fs");
const input_file = "./input.txt";

function subdivide_game_info(lines) {
  let total_possible_ids = 0;
  let total_powers = 0;

  for (const line of lines) {
    const {id, rounds} = parse_game_info(line);

    let is_possible = true;
    const reds = [];
    const greens = [];
    const blues = [];

    for (const round of rounds) {
      for (const {count, color} of round) {
        if (!is_valid_count(color, count)) {
          is_possible = false;
        }

        if (color === "red") reds.push(count);
        else if (color === "green") greens.push(count);
        else if (color === "blue") blues.push(count);
      }
    }

    if (is_possible) {
      total_possible_ids += id;
    }

    const min_reds = Math.max(...reds);
    const min_greens = Math.max(...greens);
    const min_blues = Math.max(...blues);

    const powers = min_reds * min_greens * min_blues;
    total_powers += powers;
  }

  console.log(`Part 1: ${total_possible_ids}`);
  console.log(`Part 2: ${total_powers}`);
}

function parse_game_info(line) {
  const [id_str, rounds_str] = line.split(":");
  const id = Number(id_str.trim().substring(5));
  const rounds = rounds_str.split(";").map(parse_round);

  return {id, rounds};
}

function parse_round(round_str) {
  return round_str.split(",").map((pair) => {
    const [count_str, color] = pair.trim().split(" ");
    const count = Number(count_str);
    return {count, color};
  });
}
const red_cubes_max = 12;
const green_cubes_max = 13;
const blue_cubes_max = 14;
function is_valid_count(color, count) {
  switch (color) {
    case "red":
      return count <= red_cubes_max;
    case "green":
      return count <= green_cubes_max;
    case "blue":
      return count <= blue_cubes_max;
    default:
      return false;
  }
}

const lines = fs.readFileSync(input_file, "utf-8").trim().split("\n");
subdivide_game_info(lines);

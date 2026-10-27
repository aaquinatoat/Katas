import { game } from "./fizzBuzzWhizz";

describe("FizzBuzzWhizz Game", () => {
  const expectedResults: Array<number | string> = [
    // 1 - 10
    1, "Whizz", "FizzWhizz", 4, "BuzzWhizz",
    "Fizz", "Whizz", 8, "Fizz", "Buzz",

    // 11 - 20
    "Whizz", "Fizz", "Whizz", 14, "FizzBuzz",
    16, "Whizz", "Fizz", "Whizz", "Buzz",

    // 21 - 30
    "Fizz", 22, "Whizz", "Fizz", "Buzz",
    26, "Fizz", 28, "Whizz", "FizzBuzz",

    // 31 - 40
    "Whizz", 32, "Fizz", 34, "Buzz",
    "Fizz", "Whizz", 38, "Fizz", "Buzz",

    // 41 - 42
    "Whizz", "Fizz",
  ];

  expectedResults.forEach((expected, index) => {
    const input = index + 1;

    test(`returns ${expected} for ${input}`, () => {
      expect(game(input)).toEqual(expected);
    });
  });
});

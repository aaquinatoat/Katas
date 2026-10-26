import { game } from "./fizzBuzzWhizz";

describe("FizzBuzzWhizz Game", () => {
  test("devuelve 1", () => {
    expect(game(1)).toEqual(1);
  });

  test("devuelve numeros sin ninguna regla", () => {
    expect(game(4)).toEqual(4);
    expect(game(8)).toEqual(8);
    expect(game(49)).toEqual(49);
  });

  test("devuelve Fizz", () => {
    expect(game(6)).toEqual("Fizz");
    expect(game(9)).toEqual("Fizz");
    expect(game(12)).toEqual("Fizz");
  });

  test("devuelve Buzz", () => {
    expect(game(10)).toEqual("Buzz");
    expect(game(20)).toEqual("Buzz");
    expect(game(25)).toEqual("Buzz");
    expect(game(100)).toEqual("Buzz");
  });

  test("devuelve FizzBuzz", () => {
    expect(game(15)).toEqual("FizzBuzz");
    expect(game(30)).toEqual("FizzBuzz");
    expect(game(75)).toEqual("FizzBuzz");
  });

  test("devuelve Whizz para primos distintos de 3 y 5", () => {
    expect(game(2)).toEqual("Whizz");
    expect(game(7)).toEqual("Whizz");
    expect(game(11)).toEqual("Whizz");
    expect(game(97)).toEqual("Whizz");
  });

  test("devuelve FizzWhizz para 3", () => {
    expect(game(3)).toEqual("FizzWhizz");
  });

  test("devuelve BuzzWhizz para 5", () => {
    expect(game(5)).toEqual("BuzzWhizz");
  });
});

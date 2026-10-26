[README.md](https://github.com/user-attachments/files/33990020/README.md)
# FizzBuzzWhizz Kata

I worked on this kata to practice TypeScript, unit testing with Jest, and the ideas behind Test Driven Development (TDD). My goal was to turn a set of simple rules into a function and check its behavior with tests.

## How it works

The `game` function receives a natural number greater than zero and returns a number or a string.

- If the number is divisible by 3, I add `Fizz`.
- If the number is divisible by 5, I add `Buzz`.
- For the bonus, if the number is prime, I add `Whizz`.
- If none of these rules apply, I return the original number.

The rules can be combined. For example, 15 returns `FizzBuzz`, while 3 returns `FizzWhizz` because it is both divisible by 3 and prime. The number 1 is not prime.

## Examples

These results include the prime number bonus:

| Input | Output |
| --- | --- |
| 1 | 1 |
| 2 | Whizz |
| 3 | FizzWhizz |
| 4 | 4 |
| 5 | BuzzWhizz |
| 6 | Fizz |
| 9 | Fizz |
| 10 | Buzz |
| 15 | FizzBuzz |
| 20 | Buzz |
| 30 | FizzBuzz |
| 75 | FizzBuzz |

Without the bonus, 2 would return 2, 3 would return `Fizz`, and 5 would return `Buzz`.

## Tools I used

- TypeScript
- Node.js and npm
- Jest

## Project files

```text
src/
  fizzBuzzWhizz.ts       # Game logic and prime number check
  fizzBuzzWhizz.spec.ts  # Unit tests
```

## Running the project

First, install Node.js with npm. Then download or clone this repository and open a terminal in the project folder, where `package.json` is located.

Install the dependencies:

```bash
npm install
```

Run the tests:

```bash
npm run test
```

To run the tests automatically whenever I save changes:

```bash
npm run test:watch
```

On Windows PowerShell, I can use `npm.cmd` instead of `npm`:

```powershell
npm.cmd install
npm.cmd run test
```

## How I organized the solution

I used an `isPrime` helper to keep the prime number check separate from the game rules. It returns false for numbers below 2 and checks possible divisors up to the square root of the number. The bonus only requires inputs up to 100.

Inside `game`, I build the result by adding each matching word in order: `Fizz`, `Buzz`, and `Whizz`. If the result is still empty, I return the input.

## Testing and TDD

The tests compare the actual result of `game` with the expected result. They cover unchanged numbers, multiples of 3 and 5, their combination, and prime numbers.

For this exercise, the TDD cycle means writing a test, checking that it fails, adding enough code to make it pass, and then improving the code while keeping the tests passing. This helped me understand why checking only 1 and 2 is not enough to verify all the rules.

## What I learned

I practiced using the remainder operator, combining conditions, checking prime numbers, and writing assertions with Jest. I also learned that a passing test needs an assertion: an empty test can pass without checking anything.

## Credits

I based this exercise on the [JavaScript Code Katas project by JuanPa90Cap](https://github.com/JuanPa90Cap/Katas).

## Author

Anthony Quinatoa

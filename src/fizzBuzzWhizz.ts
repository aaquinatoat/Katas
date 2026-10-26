const isPrime = (number: number): boolean => {
  if (number < 2) {
    return false;
  }

  for (let divisor = 2; divisor * divisor <= number; divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

export const game = (input: number): string | number => {
  let result = "";

  if (input % 3 === 0) {
    result += "Fizz";
  }

  if (input % 5 === 0) {
    result += "Buzz";
  }

  if (isPrime(input)) {
    result += "Whizz";
  }

  return result === "" ? input : result;
};

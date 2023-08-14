/*
You have an array of strings crypt, the crypt array contains three non-empty strings that follow the structure:

[word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

Write a function isCryptSolution(crypt, solution) that returns true if word1 + word2 = word3 has a valid solution, and false otherwise.

To determine if a solution is valid, isCryptSolution should:

Convert the letters in the crypt array into digits using the solution mapping.
If the conversion results in numbers with leading zeros, the solution is invalid.
If the conversion results in a valid arithmetic equation, where word1 + word2 = word3, the solution is valid.
The solution mapping is an array of pairs arr, where each pair is in the form [char, digit]. Each char represents a unique character in the crypt, and each digit represents a value in the solution.

Note that leading zeros are not allowed in the solution, meaning that solution will not contain pairs where the second element is 0.

For example, given the crypt array ["SEND", "MORE", "MONEY"] and the solution [['O', '0'], ['M', '1'], ['Y', '2'], ['E', '5'], ['N', '6'], ['D', '7'], ['R', '8'], ['S', '9']], the function should return true, because SEND + MORE = MONEY translates to 9567 + 1085 = 10652, which is a valid arithmetic equation.
*/

function isCryptSolution(crypt, solution) {
  // Create a map of the solution array for faster lookup
  const solutionMap = new Map(solution.map(([char, value]) => [char, value]));

  // Convert each word in the crypt to its corresponding number
  const numbers = crypt.map(word =>
    word
      .split('')
      .map(char => solutionMap.get(char))
      .join('')
  );

  // Check if any of the numbers have leading zeros
  if (numbers.some(number => number[0] === '0' && number.length > 1)) {
    return false;
  }

  // Check if the sum of the first two numbers equals the third number
  return Number(numbers[0]) + Number(numbers[1]) === Number(numbers[2]);
}
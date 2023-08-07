const isPalindrome = (x) => {
  if (x < 0) return false; // negative numbers are not palindromes
  const str = x.toString();
  return str === str.split("").reverse().join("");
}

module.exports = isPalindrome;
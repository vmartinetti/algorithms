const isPalindrome = (str) => {
  // remove all non-alphanumeric characters
  str = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
  const half = Math.floor(str.length / 2);
  const firstHalf = str.substr(0, half);
  for (let i = 0; i < half; i++) {
    if (firstHalf[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true
}

isPalindrome('A man, a plan, a canal: Panama')
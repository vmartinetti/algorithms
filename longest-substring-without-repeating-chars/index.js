const lenghtOfLongestSubstring = (s) => {
  let substr = '';
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const index = substr.indexOf(char);

    if (index > -1) {
      substr = substr.slice(index + 1);
    }

    substr += char;
    maxLength = Math.max(maxLength, substr.length);
  }
  return maxLength;
};

module.exports = lenghtOfLongestSubstring;
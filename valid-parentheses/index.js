const isValid = function (s) {
  while (s.includes('()') || s.includes('[]') || s.includes('{}')){
    s = s.replace('()', '').replace('[]', '').replace('{}', '');
  }
  return s.length === 0;
};
const isValid2 = function (s) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      stack.push(map[char]);
    }
    else if (char !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};

module.exports = isValid;
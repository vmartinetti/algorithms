const isValid2 = function (s) {
  while (s.includes('()') || s.includes('[]') || s.includes('{}')){
    s = s.replace('()', '').replace('[]', '').replace('{}', '');
  }
  return s.length === 0;
};
const isValid = function (s) {
  const expectedStack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (map[currentChar]) { //it's an opening bracket
      expectedStack.push(map[currentChar]);
    }
    else if (currentChar !== expectedStack.pop()) { //it's a not expected closing bracket
      return false;
    }
  }
  return expectedStack.length === 0;
};

module.exports = isValid;
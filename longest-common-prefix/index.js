const longestCommonPrefix = (strs) => {
  if (!strs.length) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) { //this is zero because we are looking at a PREFIX (it must be at the beginning)
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix.length) return '';
    }
  }
  return prefix;
}
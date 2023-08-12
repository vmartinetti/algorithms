/**
 * Given two strings, find the number of common characters between them.
 */
function solution(s1, s2) {
  let count = 0;
  const s1Array = s1.split('');
  
  s1Array.forEach((char) => {
      if(s2.includes(char)){
          count++;
          s2 = s2.replace(char,'');
      }
  })
  return count;
}

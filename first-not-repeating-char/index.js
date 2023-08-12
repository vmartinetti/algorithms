/*
  Given a string s consisting of small English letters, 
  find and return the first instance of a non-repeating character in it. 
  f there is no such character, return '_'.
*/
function solution(s) {
  let strSet = new Set(s)
  let count = 0;
  for(const char of strSet){
      let regExp = new RegExp(char, "gi")
      count = s.match(regExp || []).length
      if(count === 1 ) return char
  }
  return '_'
  
}

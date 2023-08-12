/*
You are given an array of strings. Your task is to return an array 
containing all the longest strings. If there are multiple longest strings, 
return them all in the same order they appear in the original array.
*/

function solution(inputArray) {
  let longestLength = 0;
  let longestWords = [];
  inputArray.forEach((word) => {
    if (word.length > longestLength) {
      longestLength = word.length;
      longestWords = [word];
    } else if (word.length === longestLength) {
      longestWords.push(word);
    }
  });
  return longestWords;
}
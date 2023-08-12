/* solution is to calculate difference between
 each element and the next element minus one that is the allowed 
 difference between elements 
 */
function solution(inputArray) {
  const sortedStatues = statues.sort((a,b) => a -b )
  let missingStatuesCount = 0;
  
  for (let i=1; i < sortedStatues.length; i++){
      missingStatuesCount += sortedStatues[i] - sortedStatues[i - 1] - 1;
  }
  return missingStatuesCount;
}
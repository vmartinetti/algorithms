/*
Note: Try to solve this task in-place (with O(1) additional memory), 
since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. 
Rotate the image by 90 degrees (clockwise).
*/
function solution(a) {
  const result = []
  for (let i=0; i< a[0].length; i++){
      let block =[]
      for (let j=a.length -1; j >= 0; j --){
          block.push(a[j][i])
      }
      result.push(block)
  }
  return result;
}

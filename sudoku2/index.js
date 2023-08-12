function solution(grid) {
  for(let i=0; i<= 8; i++){
      // check column is valid
      const nums = grid[i].filter( el => el !== '.');
      const numsSet = new Set(nums)
      if (nums.length !== numsSet.size) {
          console.log(nums.length, numsSet.size)
          return false;
      }
      
      for (let j=0; j<=8; j++){
          // check if subgrid is valid
          if((i===0 || i===3 || i===6) && (j===0 || j===3 || j===6)){
              let subgrid = grid[i].slice(j,j+3)
              subgrid = subgrid.filter(el => el !== '.')
              let nextRow = grid[i+1].slice(j,j+3).filter(el => el !== '.')
              subgrid = subgrid.concat(nextRow)
              nextRow = grid[i+2].slice(j,j+3).filter(el => el !== '.')
              subgrid = subgrid.concat(nextRow)
              const subgridSet = new Set(subgrid);
              if (j===0 && i===0){
                  console.log(subgrid)
              }
              if (subgrid.length !== subgridSet.size) 
              {
                  console.log(subgrid.length,subgridSet.size)
                  return false;
              }  
                  // console.log(subgrid.length,subgridSet.size)
          }
          // check if column is valid
          if(i===0){
              let colNums = []
              for(let k=0; k <=8; k++){
                  colNums.push(grid[i+k][j])
              }
              colNums = colNums.filter(el => el !== '.')
              const colSet = new Set(colNums)
              if(colNums.length !== colSet.size) {
                  console.log(colNums);
                  return false;
              }
          }
      }
      
  }
  return true
}
const matrix = 
[[".",".","5",".",".",".",".",".","."], 
 [".",".",".","8",".",".",".","3","."], 
 [".","5",".",".","2",".",".",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".",".",".",".",".",".",".","9"], 
 [".",".",".",".",".",".","4",".","."], 
 [".",".",".",".",".",".",".",".","7"], 
 [".","1",".",".",".",".",".",".","."], 
 ["2","4",".",".",".",".","9",".","."]]
console.log(solution(matrix))
function solution(inputArray) {
    let max = inputArray[0] * inputArray[1];
    for(let i=1; i<inputArray.length - 1; i++){
        max = Math.max(inputArray[i] * inputArray[i + 1], max)
    }
    return max;
}

console.log(solution([-23, 4, -3, 8, -12])) // -12 
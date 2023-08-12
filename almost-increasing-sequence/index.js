/* Given a sequence of integers as an array, determine whether it is possible 
to obtain a strictly increasing sequence by removing no more than one element from the array.
*/
function solution(sequence){
    let count = 0;
    for(let i = 0; i < sequence.length; i++){
        if(sequence[i] <= sequence[i-1]){
            count++;
            // this is the principal check
            /*
            The condition if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) 
            checks if the current element in the sequence is less than or equal to 
            the element two positions before it AND the next element in the sequence is less 
            than or equal to the previous element in the sequence. If this condition is true, 
            then it means that removing the current element and the previous element will not 
            result in a strictly increasing sequence, so the function returns false.
            */
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
                return false;
            }
        }
    }
    return count <= 1;
}

// to test
console.log(solution([1, 3, 2, 1])); // false

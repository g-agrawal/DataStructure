function isValidSubsequence(array, sequence) {
    let seqIndex = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === sequence[seqIndex]) {
            seqIndex++;
        }
    }    
    return sequence.length === seqIndex;
 }

const array = [2, 3, 5, 9, 1];
const sequence = [5, 1];

let isValidSequence = isValidSubsequence(array, sequence);
console.log(isValidSequence);
function twoNumberSum0(array, targetSum) {
	const len = array.length;
	for(let i = 0; i < len; i++) {
		for(let j = i+1; j < len; j++) {
			if(array[i]+array[j] === targetSum) {
				return [array[i], array[j]]
			}
		}
	}
	return [];
}
function twoNumberSum1(array, targetSum) {
	const len = array.length;    
    array.sort((a, b) => a - b);
    let left  = 0;
    let right = array.length - 1;
    while(left < right) {
        let currentSum = array[left] + array[right];
        if(currentSum < targetSum) {
            left++;
        } else if(currentSum > targetSum) {
            right--;
        } else if(currentSum === targetSum) {
            return [array[left], array[right]];
        }
    }
    return [];
}
function twoNumberSum(array, targetSum) {
	const len = array.length;    
    if(!array || len < 2) {
        return [];
    }
    const obj = { };
    obj[array[0]] = 0;
    for(let i = 1; i < len; i++) {
        const secondNum = array[i];
        const firstNum = targetSum - secondNum;
        if(firstNum in obj) {
            return [firstNum, secondNum];            
        } else {
            obj[secondNum] = i;
        }
    }
    return [];
}

const array = [3, 5, -4, 8, 11, -1, 1, 6];
//const array = [2, 5, 1, 3];
const result = twoNumberSum(array, 10);
console.log(result);
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}
function mergeSort(array) {
    const length = array.length;
    if(length == 1) {
        return array;
    }
    const middle = Math.floor(length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}


const sortedArray = mergeSort(numbers);
console.log(sortedArray);
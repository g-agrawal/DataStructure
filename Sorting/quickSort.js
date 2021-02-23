const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//const numbers = [5, 2, 1, 4, 3];

function quickSort(array) {
    let left = 0;
    let right = array.length-1;
    return quickSortRecursive(array, left, right);
}
function quickSortRecursive(array, left, right) {
    if(left < right) {
        const pivot = right;
        const indexPartition = partition(array, left, right, pivot);
        quickSortRecursive(array, left, indexPartition-1);
        quickSortRecursive(array, indexPartition+1, right);
    }    
} 
function partition(array, left, right, pivot) {
    let partitionIndex = 0;
    for(let i = 0; i < pivot; i++) {
        if(array[i] < array[pivot]) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, partitionIndex, pivot);
    return partitionIndex;
}
function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;    
}

quickSort(numbers);
console.log(numbers);
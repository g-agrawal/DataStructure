function binarySearch1(array, target) { 
    let left = 0;
    let right = array.length-1;
    while(true) {
        if(left > right)  {
            return -1;
        }
        const middle = Math.floor((left+right)/2);
        if(target == array[middle]) {
            return middle;
        } else if(target > array[middle]) {
            left = middle+1;
        } else if(target < array[middle]) {
            right = middle-1;
        }
    }   
}
function binarySearch(array, target) { 
    let left = 0;
    let right = array.length-1;
    while(left <= right) {
        const middle = Math.floor((left+right)/2);
        if(target == array[middle]) {
            return middle;
        } else if(target > array[middle]) {
            left = middle+1;
        } else if(target < array[middle]) {
            right = middle-1;
        }
    } 
	return -1;
}

const array = [2, 4, 5, 9, 10];
const targetIndex = binarySearch(array, 9);
console.log(targetIndex);

const array = [2, 4, 5, 9, 10];
const targetIndex = binarySearch(array, 9);
console.log(targetIndex);
function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        let  j = i;
        while(j > 0 && array[j] < array[j-1]){
            swap(array, j, j-1);
            j--;
        }
    }
    return array;
}
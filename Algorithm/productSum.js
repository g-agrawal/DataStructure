
function productSum1(array, multiplier =1) {
    let sum = 0;
      for(i = 0; i < array.length; i++) {
          if(Array.isArray(array[i])) {
            sum += productSum1(array[i], multiplier+1); 
          } else {
            sum += array[i];
          }
      }
      return sum*multiplier;
  }

  function productSum(array, multiplier =1) {
    let sum = 0;
      for(let item of array) {
          if(Array.isArray(item)) {
            sum += productSum(item, multiplier+1); 
          } else {
            sum += item;
          }
      }
      return sum*multiplier;
  }


const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
const sum1 = productSum1(array);
console.log(sum1);

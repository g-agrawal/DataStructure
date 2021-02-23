function productSum(array, multiplier =1) {
    let sum = 0;
      for(const item of array) {
          if(Array.isArray(item)) {
            sum += productSum(item, multiplier+1); 
          } else {
            sum += item;
          }
      }
      return sum*multiplier;
  } 

const array = [2, [3, 4], 4]
const total = productSum(array);
console.log(total);

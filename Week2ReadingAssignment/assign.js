function readInput(x, y){
    if (x <= y){
      return x;
    }
    else {
      return y;
    }
  }
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10 
  
  var array = [];

  function range(start, end, step) {
    var step = step || 1;
    if (start < end) {
      for (var i = start; i <= end; i += step) {
        array.push(i);
      }
    } else {
      for (var i = start; i >= end; i += step) {
        array.push(i);
      }
    }
    return array;
  }
  
  function sum(sumArray){
    var total = 0;
    for(var i = 0; i < sumArray.length; i++){
      total += sumArray[i];
    }
    return total;
  }

  console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
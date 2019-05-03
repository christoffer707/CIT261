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
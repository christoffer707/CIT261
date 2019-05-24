function Vec(x,y) {
    this.x = x;
    this.y = y;      
  }
  
  Vec.prototype.plus = function(vector) {
    return new vector(this.x + vector.x, this.y + vector.y);
  };
  
  Vec.prototype.minus = function(vector) {
    return new Vec(this.x - vector.x, this.y - vector.y);
  };
  
  Object.defineProperty(Vec.prototype, "length", {
    get: function() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
  });
  
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
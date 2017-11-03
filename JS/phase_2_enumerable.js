Array.prototype.myEach = function(cb){
  for (let i = 0; i < this.length; i++){
    cb(this[i]);
  }
};

// function plusTwo(num){
//   return num + 2;
// }
//
// console.log([1,2,3].myEach(plusTwo));

Array.prototype.myMap = function(cb){
  const results = [];
  // for (let i = 0; i < this.length; i++){
  //   results.push(cb(this[i]));
  //}
  this.myEach(el => {
    results.push(cb(el));
  });

  this.myEach(el => results.push(cb(el)));

  return results;
};
//console.log([1,2,3].myMap(plusTwo));

Array.prototype.myReduce = function(cb, initialValue = this.shift()) {
  // let result = initialValue;

    //this.myEach(el => result = cb(result, el));
    this.myEach(el => {
      initialValue = cb(initialValue, el);
    });
    return initialValue;
};

console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
},25));

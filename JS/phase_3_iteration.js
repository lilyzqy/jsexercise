Array.prototype.bubblesort = function() {
  const result = this.slice(0);
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    for(let i = 0; i < result.length-1; i++) {
      if (result[i] > result[i+1]){
        [result[i], result[i+1]] = [result[i+1], result[i]];
        sorted = false;
      }
    }
  }
  return result;
};

// console.log([6,3,5,7,3,2,5,9].bubblesort());
//
String.prototype.substrings = function() {
  const result = [];
  for(let i = 0; i < this.length; i++){
    for(let j = i+1; j <= this.length; j++){
      result.push(this.slice(i,j));
    }
  }
  return result;
};

console.log("cat".substrings());
//
//
// def bubblesort(array)
//   sorted = false
//   until sorted == true
//     array.each_index do |i|
//       array.each_index do |j|
//         next if i == j
//         if array[i] > array[j]
//           array[j], array[i] = array[i], array[j]
//           sorted = false
//         end
//       end
//     end
//   end
// end

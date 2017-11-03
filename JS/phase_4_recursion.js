function range(start,end){
  if(start === end){
    return [start];
  }
  let result = range(start, end - 1);
  result.push(end);
  return result;
}

// console.log(range(2,4));


function sumRec(arr){

  if(arr.length === 1) {
    return arr[0];
  }

  let sum = sumRec(arr.slice(0, arr.length-1));
  sum += arr[arr.length-1];
  return  sum;
}

// let a = [1,2,3];
// console.log(sumRec(a));

// version 1
function exponent(base, expo) {
  if (expo === 0) {
    return 1;
  }

  let result = exponent(base, expo - 1);
  result *= base;
  return result;
}

// version 2
function exp(b, n) {
  if (exp === 0) {
    return 1;
  }
  let result;
  if (n % 2 === 0) {
    result = (exp(b, n / 2) * exp(b, n / 2)) ;
  } else {
    result = b * (exp(b, (n - 1) / 2) * exp(b, (n - 1) / 2));
  }

  return result;
}


// console.log(exponent(2, 3));
// console.log(exp(2, 2));

function fibonacci(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else if (n < 1) {
    return [];
  }

  let fibs = fibonacci(n - 1);
  fibs.push(fibs[fibs.length-2] + fibs[fibs.length-1]);
  return fibs;
}

// console.log(fibonacci(4));
// [0, 1, 1, 2]

function bsearch(arr, target) {
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr.length <= 1 && arr[mid] !== target) {
     return -1;
  }

  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  let val;
  if (target > arr[mid]){
    val = bsearch(right, target);
      if (val === -1) {
        return val;
      } else {
        val += left.length;
      }
  } else {
    val = bsearch(left, target);
  }
  return val;

}

// console.log(bsearch([3, 4, 5], 3));
// 3

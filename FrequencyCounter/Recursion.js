function factorial1(num) {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

function factorial2(num) {
  if (num < 1) {
    return 0;
  }
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

//helper function
function collectAllOdds(arr) {
  let result = [];

  function helper(arr) {
    if (arr.length == 0) {
      return;
    }
    if (arr[0] % 2 == 1) {
      result.push(arr[0]);
    }
    helper(arr.slice(1));
  }
  helper(arr);
  return result;
}

//pure recursion

function collectAllOdds2(arr) {
  var newArr = [];

  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 == 1) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectAllOdds2(arr.slice(1)));
  return newArr;
}

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

function productOfArray(arr) {
  if (arr.length == 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

function fibanocci(num) {
  if (num <= 1) {
    return num;
  }
  return fibanocci(num - 1) + fibanocci(num - 2);
}

// console.log(factorial1(4));
// console.log(collectAllOdds2([1, 2, 3, 4, 5, 6, 7]));
// console.log(power(10, 3));

// console.log(productOfArray([1, 2, 3, 4, 5]));
console.log(fibanocci(9));

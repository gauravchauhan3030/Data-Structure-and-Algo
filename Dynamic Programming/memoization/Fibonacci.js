function fibo(num, memo = {}) {
  if (memo[num]) return memo[num];
  if (num <= 2) return 1;
  memo[num] = fibo(num - 1, memo) + fibo(num - 2, memo);
  console.log(num, memo[num]);
  return memo[num];
}

// console.log(fibo(1));
// console.log(fibo(2));
// console.log(fibo(3));
// console.log(fibo(4));
// console.log(fibo(5));
console.log(fibo(50));

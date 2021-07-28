function fibo(n) {
  const table = Array(n + 1).fill(0);
  console.log(table, "here");

  table[1] = 1;

  for (let i = 0; i < n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  console.log(table);

  return table[n];
}

console.log(fibo(7));

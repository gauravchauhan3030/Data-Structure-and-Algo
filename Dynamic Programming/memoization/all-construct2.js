const allConstruct = (target) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  let result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};

console.log(allConstruct(32745)); // [['3','27', 45],["3", "2745"], ["32","745"],["32745"]]
//   console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

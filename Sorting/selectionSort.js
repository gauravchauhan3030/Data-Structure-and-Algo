function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i != lowest) {
      [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
    }
  }
  return arr;
}

console.log(selectionSort([2, 3, 12, 15, 4, 6, 5, 7, 6, 8, 9]));

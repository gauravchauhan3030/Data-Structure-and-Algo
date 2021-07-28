function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotValue = arr[start];
  let swapIndex = start;
  let swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, swapIndex, start);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([8, 1, 4, 2, 3, 8, 7, 9, 6]));

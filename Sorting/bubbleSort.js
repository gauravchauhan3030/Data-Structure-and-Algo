function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
}

function bubbleSort2(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
}

function bubbleSort3(arr) {
  var swapTrue;
  for (let i = arr.length; i > 0; i--) {
    swapTrue = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapTrue = true;
      }
    }
    if (!swapTrue) {
      console.log(i, "break");
      break;
    }
  }
  console.log(arr);
}

bubbleSort3([2, 3, 12, 15, 4, 6, 5, 7, 6, 8, 9]);

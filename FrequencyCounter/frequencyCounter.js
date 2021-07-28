function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

function same2(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let value of arr1) {
    frequencyCounter1[value] = ++frequencyCounter1[value] || 1;
  }
  for (let value of arr2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }
  for (let key1 in frequencyCounter1) {
    if (!(key1 ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key1] !== frequencyCounter2[key1 ** 2]) {
      return false;
    }
  }
  return true;
  console.log(frequencyCounter1, frequencyCounter2);
}

console.log(same2([1, 2, 4], [16, 4, 2]));

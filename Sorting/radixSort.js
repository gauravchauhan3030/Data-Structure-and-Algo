function getDigit(num, i) {
  return Math.floor(num / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(nums) {
  let maxDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(nums[i]));
  }
  return maxDigit;
}

function radixSort(nums) {
  let maxCount = mostDigits(nums);
  for (let k = 0; k < maxCount; k++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    // console.log(digitBucket);
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBucket[digit].push(nums[i]);
    }
    nums = [].concat(...digitBucket);
  }
  return nums;
}

console.log(radixSort([283737, 34, 37983]));

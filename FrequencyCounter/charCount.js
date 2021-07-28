function charCount1(str) {
  var result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z1-9]/.test(char)) {
      if (!result[char]) {
        result[char] = 1;
      } else {
        result[char] += 1;
      }
    }
  }
  return result;
}

function charCount2(str) {
  var result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z1-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function charCount3(str) {
  var result = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code >= 48 && code <= 57) &&
    !(code >= 65 && code <= 90) &&
    !(code >= 97 && code <= 122)
  ) {
    return false;
  }
  return true;
}

console.log(charCount3("hello tHere"));

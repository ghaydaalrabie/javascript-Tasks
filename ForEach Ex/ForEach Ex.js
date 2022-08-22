/* 
//  Exercise 1: 
// * Write a function called doubleValues which accepts an array and returns 
// a new array with all the values in the array passed to the function doubled
// *
// * Test Case:
// *    Test Case 1: doubleValues([1,2,3]) 
// *    Test Case 2: doubleValues([5,1,2,3,10])   */

function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    newArr.push(val * 2);
  });
  return newArr;
}
console.log("Q1 = ", doubleValues([1, 2, 3, 4, 5]));

// Write a function called onlyEvenValues which accepts an array and returns
// a new array with only the even values in the array passed to the function

function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  return newArr;
}

console.log("Q2 = ", onlyEvenValues([1, 2, 3, 4, 5, 6]));

// // * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
// // *
// // * Test Case:
// // *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])
// // *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])

function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    newArr.push(val[0] + val[val.length - 1]);
  });
  return newArr;
}

console.log("Q3 = ", showFirstAndLast(["colt", "matt", "tim", "udemy"]));

// // Exercise 4:
// // * Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed
// // * to the function with the new key and value added for each object

function addKeyAndValue(arr, key, value) {
  arr.forEach(function (val) {
    val[key] = value;
  });
  return arr;
}

console.log(
  "Q4 = ",
  addKeyAndValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "instructor"
  )
);

// // Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the
// // * values as the number of times the vowel appears in the string. This function should be case insensitive so a
// // lowercase letter and uppercase letter should count

function vowelCount(str) {
  let splitArr = str.split("");
  let obj = {};
  const vowels = "aeiou";

  splitArr.forEach(function (letter) {
    let lowerCasedLetter = letter.toLowerCase();
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}

console.log("Q5 = ", vowelCount("Elie"));

// The split() method takes a pattern and divides a String into an ordered list of
// substrings by searching for the pattern, puts these substrings into an array, and returns the array.

function vowelCount(str) {
  var splitArr = str.toLowerCase().split("");
  var obj = {};
  var vowels = "aeiou";

  splitArr.forEach(function (letter) {
    if (vowels.indexOf(letter) !== -1) {
      if (obj[letter]) {
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
  });
  return obj;
}

console.log("Q5 = ", vowelCount("I Am awesome and so are you"));

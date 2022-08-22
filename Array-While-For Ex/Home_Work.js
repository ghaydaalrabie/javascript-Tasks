// /*
// 1
// Correct the syntax error
//  [ 1,7  9  45, ]

//  ["Str" "alex","moh"

//  'the','fox' 'over' lazy, 'dog',  ]

// */

let x = [1, 7, 9, 45];

let y = ["Str", "alex", "moh"];

let z = ["the", "fox", "over", " lazy", "dog"];

// /*
// 2
// What the index of "Banana","Tomato"
// var fruits=["Tomato","Banana","Watermelon"]

// */

// // Index of Banana = 1
// // Index of Tomato = 0

// /*
// 3
// Create an array represents your:
// 1- Favorite Food (5)
// 2- Favorite Sport (3)
// 3- Favorite Movie (4)
// */

// // let favoriteFood = [ "pasta ", "shawrma" , "mansaf" , "burger" , " Salad "  ] ;
// // letfavoriteSport = ["Basketball " , " Volleyball " و "Swimming"] ;
// // let favMovie=["Leon the professional","Mission Impossible","Rush hour"];

// /*
// 4
// Create a function called firstOfArray
// that take an array as a parameter
// and return the first element in an array

// Ex: firstOfArray([1,4,5]) => 1
// Ex: firstOfArray(["t","u","g","x"]) => "t"
// */

function firstofArray (array) {

    return array [0];
}

console.log(firstofArray([1, 4, 5]));
console.log(firstofArray(["t","u","g","x"]));

// /*
// 5
// Create a function called lastOfArray
// that take an array as a parameter
// and return the last element in an array

// Ex: lastOfArray([1,4,5]) => 5
// Ex: lastOfArray(["t","u","g","x"]) => "x"
// */

 function lastOfArray(array) {

   return array[array.length - 1];

 }

console.log(lastOfArray([1, 4, 5]));
console.log(lastOfArray(["t", "u", "g", "x"]));

/*


// 6
// Using console make this array to be like this one (push, unshift, shift, pop)

// var array = [0,5,7,9]
// => [1,3,4,6,8,9,10]
// */

// //  Arrays Methods [Adding And Removing]
// //   - unshift("", "") Add Element To The First
// //   - push("", "") Add Element To The End
// //   - shift() Remove First Element From Array
// //   - pop() Remove Last Element From Array

var array1 = [0, 5, 7, 9];
array1.push(10);
array1.shift();
array1.shift();
array1.shift();
array1.unshift(1, 3, 4, 6, 8);


// console.log("1", array1);

// /*
// 7
// Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

// var array2 = [5,9,-7,3.5]
// */

// // var array1 = [0,5,7,9] ;

var array2 = [5, 9, -7, 3.5];
array2.shift();
array2.shift();
array1.shift();
array2.unshift(0, 5);
array2.pop();
array2.pop();
array2.push(7, 9);

// console.log("2", array2);




// // * Exercise 1:
// // * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
// // *
// // * Test Case:
// // *    Test Case 1: doubleValues([1,2,3])
// // *    Test Case 2: doubleValues([5,1,2,3,10])
// // *
// // * Result:
// // * Test Case 1:  [2,4,6]
// // * Test Case 2: [10,2,4,6,20]

function doubleValues(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {

    // newArr.push(arr[i] * 2);

    newArr[i] = arr[i] * 2;
  }
  return newArr;
 }

// // console.log("doubleValues", doubleValues([1, 2, 3]));
// // console.log("doubleValues2", doubleValues([5, 1, 2, 3, 10]));

// // * Exercise:
// // * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
// // *
// // * Test Cases:
// // *   onlyEvenValues([1,2,3])
// // *   onlyEvenValues([5,1,2,3,10])
// // *
// // * Result:
// // *  Test Case 1:  [2]
// // *  Test Case 2: [2,10]
// // */

// // / push() adds an element to the end of an array.
// // The forEach() method executes a provided function once for each array element.




// function onlyEvenValues(arr) {
//   let newArr = [];
//   arr.forEach((val) => {
//     if (val % 2 === 0) {
//       newArr.push(val);
//     } });
//   return newArr;
// }

// //  console.log (onlyEvenValues([1,2,3,4,5])) ;
// //   console.log(onlyEvenValues([, 2, 3, 4, 8 , 10 ,11 ,16]));

// // * Exercise:
// // * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
// // *
// // * Test Case:
// // *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])
// // *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])
// // *
// // * Result:
// // * Test Case 1: ["ct", "mt", "tm", "uy"]
// // * Test Case 2: ['hi', 'ge', 'se']
// // *

// // (Array prototype forEach : The forEach() method calls a function for each element in an array.
// // charAt buit in function in js


// function showFirstAndLast(arr) {
//   let newArr = [];
//   arr.forEach(function (val) {
//     newArr.push(val.charAt(0) + val.charAt(val.length - 1));
//   });

//   return newArr;
// }
// console.log( "showFirstAndLast", showFirstAndLast(["colt", "matt", "tim", "udemy"]));
// console.log("showFirstAndLast2", showFirstAndLast(["hi", "goodbye", "smile"]));

// //
// /*8
// Create a function called middleOfArray
// that take an array as a parameter
// and return the middle element in an array if it is have an odd elemnets
// and return the two middle elemnt in an array if it is have an even elemnets

// Ex: middleOfArray([1,4,5]) => 4
// Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
// */

// // The Math.floor() function returns the largest integer less than or equal to a given number.

// function middleOfArray(array) {
//   if (array.length % 2 === 1) {
//     return array[(array.length - 1) / 2];

//     // return array[Math.floor(array.length/2)];
//   } else {
//     return array[array.length / 2 - 1] + array[array.length / 2];
//   }
// }
// console.log("middleOfArray", middleOfArray([1, 4, 5]));
// console.log("middleOfArray2", middleOfArray(["t", "u", "g", "x"]));

// /*
// 9
// Using assignment operator (=)
// make the animals array have these animals
// var animals = ['cat', 'ele', 'bird']
// animals; => ['zebra', 'elephant']
// ** hint: animals[0]=something


// var nums= [1,2,3,8,9]
// nums => [5,-22,3.5,44,98,44]
// */
// var animals = ["cat", "ele", "bird"];
// animals[0] = "zebra";
// animals[1] = "elephant";

// var nums = [1, 2, 3, 8, 9];
// (nums) => [5, -22, 3.5, 44, 98, 44];

// let arr = [1, 2, 3, 8, 9];
// arr[0] = 5;
// arr[1] = -22;
// arr[2] = 3.5;
// arr[3] = 44;
// arr[4] = 98;
// arr[5] = 44;

// /*
// 10
// Create a function called indexOfArray
// that accept an array and index
// and return what this array have in this index

// var nums= [1,2,3,8,9]
// Ex: indexOfArray(nums,3) => 8
// Ex: indexOfArray(nums,1) => 2
// Ex: indexOfArray(nums,4) => 9

// **try more cases by your self
// */

// function indexOfArray(arr, index) {
//   return arr[index];
// }
// console.log("indexOfArray", indexOfArray([1, 2, 3, 8, 9], 3));
// console.log(indexOfArray([1, 2, 3, 8, 9], 1));
// console.log(indexOfArray([1, 2, 3, 8, 9], 4));

// // 11
// // Create a function called arrayExceptLast
// // that accept an array
// // and return the entire array except the last elemnt
// // ** hint: search abou the function that will cut the array on MDN
// // var nums= [1,2,3,8,9]
// // Ex: arrayExceptLast(nums) =>  [1,2,3,8]

// // **try more cases by your self

// function arrayExceptLast(arr) {
//   arr.pop();
//   console.log(arr);
// }

// arrayExceptLast([1, 2, 3, 8, 9]);

// // 12
// // Create a function called addToEnd
// // that accept an array and value
// // and return the entire array with add this value to the end of this array

// // var nums= [1,2,3,8,9]
// // Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

// // **try more cases by your self
// // */

// function addToEnd(arr, value) {
//   arr.push(value);
//   console.log(arr);
// }

// console.log(addToEnd([1, 2, 3, 8, 9], 55));

// // all the exercises below should solved 2 times:
// // 1- for loop
// // 2- while lopp
// /*

// 13
// Create a function called sumArray
// that accept an array
// and return the summation of all elemnt in this array

// var nums= [1,2,3,8,9]
// Ex: sumArray(nums) => 23

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log("sum", sumArray([1, 2, 3, 8, 9]));

// // **** Using While ***

// function sumArray(arr) {
//   let i = 0;
//   let sum = 0;
//   while (i < arr.length) {
//     sum += arr[i];
//     i++;
//   }
//   return sum;
// }
// //console.log(sumArray([1, 2, 3, 8, 9]));

// /*
// 14
// Create a function called minInArray
// that accept an array
// and return the minimum value inside this array

// var nums= [1,2,3,8,9]
// Ex: minInArray(nums) => 1

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// // function minInArray(array) {
// //   let min = array[0];
// //   for (i = 0; i < array.length; i++) {
// //     if (min <= array[i]) {
// //       min = min;
// //     } else {
// //       min = array[i];
// //     }
// //   }
// //   return min;
// // }

// // function minInArray(arr) {
// //   let min = array[0];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (min <= array[i]) {
// //       min = min;
// //     } else {
// //       min = array[i];
// //     }
// //     // var m = Math.min (...arr) ;
// //   }
// //   return min;
// // }

// // console.log("minInArray", minInArray([1, 2, 3, 8, 9]));
// // console.log(minInArray([5, 2, 3, 10, 9]));


// // 15
// // Create a function called removeFromArray
// // that accept an array and elemnt to remove
// // and return the array after remove this elemnt from it

// // var nums= [1,2,3,8,9]
// // Ex: minInArray(nums,8) => [1,2,3,9]

// // ** solve it one time using for loop and another using while loop
// // **try more cases by your self

// // The splice() method changes the contents of an array by removing or replacing existing elements

// function removeFromArray(arr,elemnt){

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==elemnt)
//         arr.splice(i,1);
//     }
// return arr;
// }
// console.log(removeFromArray ([1,2,3,8,9], 8));

// //   let i = 0;

// //   function removeFromArray(arr,elemnt){
// //     while (i<arr.length){
// //         if(arr[i]===elemnt){
// //             arr.splice(i, 1)
// //         }
// //         i++
// //     }
// //     return arr;

// // }

// // console.log(removeFromArray([1, 2, 3, 8, 9], 8));

// // 16
// // Create a function called oddArray
// // that accept an array
// // and return an array have only the odd elemnts

// // var nums= [1,2,3,8,9]
// // Ex: oddArray(nums) => [1,3,9]

// // ** solve it one time using for loop and another using while loop
// // **try more cases by your self
// // */

// function oddArray(arr) {
//   let odd = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       odd.push(arr[i]);
//     }
//   }
//   return odd;
// }
// console.log(oddArray([1, 2, 3, 8, 9]));

// // function oddArray(arr) {
// //   let odd = [];
// //   let i = 0 ;
// //   while (i <arr.length) {
// //        if (arr[i] % 2 !== 0) {
// //       odd.push(arr[i]);
// //     }
// //     i++ ;

// //   }
// //  return odd;
// // }
// // console.log(oddArray([1, 2, 3, 8, 9]));

// /*
// 17
// Create a function called aveArray
// that accept an array
// and return the average of the numbers inside this array

// var nums= [1,2,3,8,9]
// Ex: aveArray(nums) => 4.6

// var nums2= [1,2,3,8,9,77]
// Ex: aveArray(nums) => 16.6

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// // function aveArray(arr) {
// //   let sum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     sum += arr[i];
// //   }
// //   return sum / arr.length;
// // }
// // console.log(aveArray([1, 2, 3, 8, 9]));
// // console.log(aveArray([1, 2, 3, 8, 9, 77]));

// // function aveArray(arr) {
// //   let sum = 0;
// //   let i = 0 ;
// //   while (i <arr.length) {
// //     sum += arr[i];
// //     i ++ ;

// //   }
// //    return sum / arr.length;
// // }

// // console.log(aveArray([1, 2, 3, 8, 9]));

// /*
// 18
// Create a function called shorterInArray
// that accept an array of strings
// and return the shortest string inside this array (first)

// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// Ex: shorterInArray(strings) => "alex"

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// function shorterInArray(arr) {
//   let shorter = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length < shorter.length) {
//       shorter = arr[i];
//     }
//   }
//   return shorter;
// }
// console.log(
//   shorterInArray(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])
// );

// // function shorterInArray(arr){
// //     let shorter = arr[0];
// //     let i = 0 ;
// //     while (arr[i].length < shorter.length) {
// //   shorter = arr[i];
// //         i++ ;
// //     }
// //     return shorter;
// // }

// // console.log( shorterInArray(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]));

// /*
// 19
// Create a function called repeatChar
// that accept a string and char
// and return the times that this char repeat inside this string

// var string= "alex mercer madrasa rashed2 emad hala"
// Ex: repeatChar(string,"a") => 6
// Ex: repeatChar(string,"z") => 0

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// // function repeatChar(string, character) {
// //   let sum = 0;
// //   for (let i = 0; i < string.length; i++) {
// //     if (string[i] === character) {

// //       sum++;
// //     }
// //   }
// //   return sum ;
// // }
// // console.log(repeatChar("alex mercer madrasa rashed2 emad hala", "a"));
// // console.log(repeatChar("alex mercer madrasa rashed2 emad hala", "m"));

// // function repeatChar(str, char) {
// //   let count = 0;
// //   let i = 0 ;
// //   while(i!=str.length) {
// //     if (str[i] === char)
// //      count++;
// //     i++ ;
// //   }
// //   return count;
// // }

// // console.log(repeatChar("alex mercer madrasa rashed2 emad hala", "a"));

// /*
// 20
// Create a function called evenIndexOddLength
// that accept an array of strings
// and return a new array that have the string with odd length in even index

// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// Ex: evenIndexOddLength(strings) => ["madrasa"]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// // function evenIndexOddLength(arr) {
// //   let newArr = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i].length % 2 !== 0) {
// //       newArr.push(arr[i]);
// //     }
// //   }
// //   return newArr;
// // }
// // console.log( evenIndexOddLength(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]));

// // function evenIndexOddLength(array){
// //     let newArray = [];
// //     let i =0;
// //     while(i<array.length){
// //         if(array[i].length % 2 ===1 && i % 2 ===0){
// //             newArray.push(array[i])
// //         }
// //         i++
// //     }
// //     return newArray
// // }
// // console.log( evenIndexOddLength(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]));

// /*
// 21
// Create a function called powerElementIndex
// that accept an array of number
// and return a new array that have the elemnt power by the index of it self

// var nums= [44, 5, 4, 3, 2, 10]
// Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// function powerElementIndex(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] ** i);
//   }
//   return newArr;
// }
// console.log(powerElementIndex([44, 5, 4, 3, 2, 10]));

// // While Loop
// // function powerElementIndex(array){
// //     let newArray = [];
// //     let i = 0;
// //     while (i<array.length){
// //         newArray.push(array[i]**i)
// //         i++;
// //     }
// //     return newArray;
// // }


// /*
// 22
// Create a function called evenNumberEvenIndex
// that accept an array of nums
// and return a new array that have the even number in even index

// var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
// Ex: evenNumberEvenIndex(nums) => [2,8,34]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// function evenNumberEvenIndex(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0 && i % 2 === 0) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// // While Loop
// // function evenNumberEvenIndex(array){
// //     let newArray = [];
// //     let i =0;
// //     while(i<array.length){
// //         if(array[i] % 2 ===0 && i % 2 ===0){
// //             newArray.push(array[i]);
// //         }
// //         i++;
// //     }
// //     return newArray;
// // }



// // While Exercises
// // 1
// // Create a function called subtract
// // that takes a single parameter n,
// // and return the subtraction of all
// // starting from n to 0
// // Ex: subtract(2); => 2 - 1 - 0 => 1
// // Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
// // Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
// // */

// function subtract(num) {
//   let i = num - 1;
//   while (i >= 0) {
//     num -= i;
//     i--;
//   }
//   return num;
// }
// console.log(subtract(9));

// /*



// 2
// Create a function called factorial
// that takes a single parameter n,
// and return the product of all integers up to n starting from 1
// Ex: factorial(2); => 2 * 1 => 2
// Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
// */

// function factorial(num) {
//   let i = num - 1;
//   while (i >= 1) {
//     num *= i;
//     i--;
//   }
//   return num;
// }
// console.log(factorial(4));

// /*
// 3
// Create a function called repeatStr
// that takes 2 parameters string and number,
// and return the string number time with space
// Important: the continue condition should be [somthing !== 0]
// ** Think how we can return nothing ???
// ** Important: You should dint have extra space at the end
// Ex: repeatStr("to",2); => "to to"
// Ex: repeatStr("to",4); => "to to to to"
// */

// function repeatStr(str, num) {
//   let newStr = "";
//   let i = num;
//   while (i !== 0) {
//     newStr += str;
//     newStr += " ";
//     i--;
//   }
//   return newStr;
// }

// console.log(repeatStr("to", 4));

// /*
// 4
// Create a function called sum2
// that take two parameter
// and will return the sumation from the first number to the second number
// Ex: sum2(4, 5); => 4 + 5 => 9
// Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
// */

// function sum2(num1, num2) {
//   let i = num1;
//   let sum = 0;
//   while (i >= num1 && i <= num2) {
//     sum += i;
//     i++;
//   }
//   return sum;
// }

// console.log(sum2(3, 6));

// /*
// 5
// Create a function called multiOf
// that takes 3 parameters,
// and return the first number mutiple by
// (the second one ^ the third number)
// ** Important: dont use **
// Ex: multiOf(4,10,3); => 4000
// Ex: multiOf(6,3,2); => 54
// Ex: multiOf(6,2,3); => 48
// 6 * 3^2
// */

// function multiOf(num1, num2, num3) {
//   num1 *= Math.pow(num2, num3);
//   return num1;
// }

// console.log(multiOf(4, 10, 3));

// /*
// 6
// Create a function called muti2
// that take two parameter
// and will return the multiplication
// from the first number to the second number
// Ex: muti2(4, 5); => 4 * 5 => 20
// Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
// */

// function muti2(num1, num2) {
//   let i = num1;
//   let multi = 1;
//   while (i >= num1 && i <= num2) {
//     multi *= i;
//     i++;
//   }
//   return multi;
// }

// console.log(muti2(3, 6));

// /*


// /*
// 7
// Create a function called numberBetweenUs
// that take 2 parameters
// and return the number between them
// ** Important: You should't have extra space at the end and comma
// ** Important: the stop condition should [num1!==num2-1]
// ** hint: maybe you will have 2 if statment
// numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
// numberBetweenUs(1,3) => "2"
// */

// function numberBetweenUs(num1, num2) {
//   let str = "";
//   while (num1 !== num2 - 1) {
//     num1++;
//     str += num1;
//     if (num1 !== num2 - 1) {
//       str += ",";
//     }
//   }
//   return str;
// }

// console.log("numberBetweenUs", numberBetweenUs(2, 8));

// /*
// 8
// Write a function called countDown
// that takes one parameter
// and return a string represent the count down from the number
// that insert to 0
// instead of 0 you shoulf have "done"
// between each number a comma and space
// ** you need to use recursion
// ** Important: You should't have extra space at the end and comma
// countDown(5)
// => "5, 4, 3, 2, 1, done"
// countDown(2)
// => "2, 1, done"
// countDown(7)
// => "7, 6, 5, 4, 3, 2, 1, done"
// */

// function countDown(num) {
//   let str = "";
//   while (num >= 0) {
//     if (num === 0) {
//       str += "done";
//       break;
//     }
//     str += num;
//     str += ",";
//     num--;
//   }
//   return str;
// }

// console.log(countDown(7));

// //For Exercises

// /*
//  * Exercise 1:
//  * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
//  *
//  * Test Case:
//  *    Test Case 1: doubleValues([1,2,3])
//  *    Test Case 2: doubleValues([5,1,2,3,10])
//  *
//  * Result:
//  * Test Case 1:  [2,4,6]
//  * Test Case 2: [10,2,4,6,20]
//  *
//  *
//  */

// /*
//  * Exercise 2:
//  * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
//  *
//  * Test Cases:
//  *   onlyEvenValues([1,2,3])
//  *   onlyEvenValues([5,1,2,3,10])
//  *
//  * Result:
//  *  Test Case 1:  [2]
//  *  Test Case 2: [2,10]
//  */

// /*
//  * Exercise 3:
//  * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
//  *
//  * Test Case:
//  *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])
//  *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])
//  *
//  * Result:
//  * Test Case 1: ["ct", "mt", "tm", "uy"]
//  * Test Case 2: ['hi', 'ge', 'se']
//  *
//  */

// /*
//  * Exercise 4:
//  * Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed
//  * to the function with the new key and value added for each object
//  *
//  * Test Cases:
//  *   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')
//  *
//  * Result:
//  *   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
//  *
//  */

// function addKeyAndValue(arr, key, value) {
//   for (i = 0; i < arr.length; i++) {
//     obj = arr[i];
//     obj[key] = value;
//   }
//   return arr;
// }

// console.log(
//   addKeyAndValue(
//     [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
//     "title",
//     "instructor"
//   )
// );

// /*
//  * Exercise 5:
//  * Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the
//  * values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
//  *
//  * Test Cases 1: vowelCount('Elie') // {e:2,i:1};
//  * Test Cases 2:  vowelCount('Tim') // {i:1};
//  * Test Cases 3:  vowelCount('Matt') // {a:1})
//  * Test Cases 4:  vowelCount('hmmm') // {};
//  * Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
//  *
//  *
//  * Result:
//  * Test Cases 1: {e:2,i:1};
//  * Test Cases 2: {i:1};
//  * Test Cases 3: {a:1})
//  * Test Cases 4: {};
//  * Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
//  *
//  * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//  */

function vowel_count(str1) {
  var vowel_list = "aeiouAEIOU";

  var object = {};

  for (var i = 0; i < str1.length; i++) {
    if (vowel_list.indexOf(str1[i]) !== -1) {

       
        if(object[str1[i]]== undefined) 
        {object[str1[i]] = 1} 
else{ object[str1[i]] ++};
     

    }
  }

 return object;

  }

// console.log("vowel_count", vowel_count("I Am awesome and so are you"));




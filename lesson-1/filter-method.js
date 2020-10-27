// Write a function that acts like the built-in Array.prototype.filter method.
// For this problem, you only need to emulate the most basic behavior:
// filtering elements of an array by examining the array values. You don't have
// to include the thisArg argument or support multiple arguments to the
// callback function, but feel free to add them if you like. Your function
// should work like this:

function filter(arr, callback, thisArg) {
  const result = [];

  for (let index = 0; index < arr.length; index += 1) {
    const currentElement = arr[index];
    if (callback.call(thisArg, currentElement, index, arr)) {
      result.push(currentElement);
    }
  }

  return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true)); // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

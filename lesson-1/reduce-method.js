function reduce(arr, callback, initialValue) {
  let startIndex = 0;
  let accumulator = initialValue;

  if (initialValue === undefined) {
    accumulator = arr[0];
    startIndex = 1;
  }

  for (let index = startIndex; index < arr.length; index += 1) {
    accumulator = callback(accumulator, arr[index]);
  }

  return accumulator;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number)); // => 15
console.log(reduce(numbers, (prod, number) => prod * number)); // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3)); // => 360
console.log(reduce([], (accum, number) => accum + number, 10)); // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(
  reduce(
    stooges,
    (reversedStooges, stooge) => {
      reversedStooges.unshift(stooge);
      return reversedStooges;
    },
    []
  )
);
// => ["Curly", "Larry", "Mo"]

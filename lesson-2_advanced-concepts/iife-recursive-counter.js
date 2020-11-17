(function recursiveCounter(countFrom) {
  console.log(countFrom);

  if (countFrom !== 0) {
    recursiveCounter(countFrom - 1);
  }
})(10);
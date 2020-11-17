(function recursiveCounter(countFrom) {
  if (countFrom < 0) {
    return;
  } else {
    console.log(countFrom);
    recursiveCounter(countFrom - 1);
  }
})(10);
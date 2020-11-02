# Practice Problems: Hoisting and the var Statement

1. Consider the following code:

```javascript
var foo = function () {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo();
```

Without running this code, what will it display? Explain your reasoning.

```
Bye
```

The code first defines a variable `foo` whose value is a function expression, then declares a function whose name, `foo`, is the same as the variable. Since function declarations get hoisted above `var` variables in your code, this code is equivalent to the following:

```javascript
function foo() {
  console.log("Hello");
}

foo = function () {
  console.log("Bye");
};

foo();
```

Thus `foo` ends up with the first function from the original code as its value, and that displays `Bye` when invoked.

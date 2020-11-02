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

Output:

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

2. Consider the following code:

```javascript
for (var index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    var foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);
```

Without running this code, what does it print?

Output:

```
undefined
Hello
Bye
2
```

3. The following code doesn't work:

```javascript
bar();

var bar = function () {
  console.log("foo!");
};
```

Fixed code:

```javascript
bar();

function bar() {
  console.log("foo!");
}
```

Function expressions are not hoisted, so if you need to invoke a function before its body is defined, use function declaration.

4. Without running the following code, determine what it logs to the console:

```javascript
var bar = 82;

function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo();
```

Output:

```
NaN
```

Hoisting treats this code as though we wrote it like this:

```javascript
function foo() {
  var bar;
  bar = bar - 42;
  console.log(bar);
}

var bar;

foo();
```

5. Rewrite the following code without using `var`:

```javascript
function foo(condition) {
  console.log(bar);

  qux = 0.5772;

  if (condition) {
    var qux = 3.1415;
    console.log(qux);
  } else {
    var bar = 24;

    var xyzzy = function () {
      var qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);
```

Solution:

```javascript
function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function () {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);
```

6. Rewrite the following code in a way that shows the effect that hoisting has on the code:

```javascript
Pet.prototype.walk = function () {
  console.log(`${this.name} is walking.`);
};

function Pet(name, image) {
  this.name = name;
  this.image = image;
}

class Image {
  constructor(file) {
    this.file = file;
  }
}

var catImage = new Image("cat.png");
var pudding = new Pet("Pudding", catImage);
```

A possible Solution:

```javascript
function Pet(name, image) {
  this.name = name;
  this.image = image;
}

var Image;
var catImage;
var pudding;

Pet.prototype.walk = function () {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);
```

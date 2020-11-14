// In this problem, we'll build a simple todo list program that uses the
//  techniques we've seen in this assignment.

// Write a makeList function that creates and returns a new function that
//  implements a todo list. The returned function should have the following
//  behavior:

// - When called with an argument that is not already on the list, it adds
// that argument to the list.
// - When called with an argument that is already on the list, it removes the
// element from the list.
// - When called without arguments, it prints all of the items on the list.
// If the list is empty, it prints an appropriate message.

// We can improve the interface by returning an Object from makeList instead
// of a function. That lets us create an API that is easy to use and understand:

function makeList() {
  const list = [];
  return {
    add(item) {
      list.push(item);
      console.log(`${item} added!`);
    },

    remove(item) {
      const index = list.indexOf(item);
      list.splice(index, 1);
      console.log(`${item} removed!`);
    },

    list() {
      list.forEach(item => console.log(item));
    }
  }
}

let list = makeList();
list.add("peas"); // peas added!

list.list(); // peas

list.add("corn"); //corn added!

list.list();
// peas 
// corn 

list.remove("peas"); //peas removed!

list.list(); // corn
const { Stack } = require("./stackObject");

const stack = new Stack();

let array = [-66, -45, 37, 66, -19, 30, -58, -18, 97, 62];

for (let i = 0; i < 10; i++) {
  let num = array[i];

  if (num % 2 === 0) {
    stack.push(num);
  } else if (!stack.isEmpty()) {
    stack.pop();
  } else {
    console.log("A pilha está vazia.");
  }
}

if (!stack.isEmpty()) {
  console.log(stack.toString());

  while (!stack.isEmpty()) {
    stack.pop();
  }
}

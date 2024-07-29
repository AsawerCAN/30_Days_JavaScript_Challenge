// Define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create nodes for each task
const task1 = new Node("Buy groceries");
const task2 = new Node("Clean the house");
const task3 = new Node("Pay bills");

// Link the nodes together
task1.next = task2;
task2.next = task3;

// Function to traverse and print the linked list
function printLinkedList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

// Print the linked list starting from the first task
printLinkedList(task1);

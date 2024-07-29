// Define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define the LinkedList class
class LinkedList {
  constructor() {
    this.head = null; // The head (first node) of the linked list
  }

  // Method to add a node to the end of the list
  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Method to remove a node from the end of the list
  remove() {
    if (this.head === null) {
      return null; // List is empty
    }
    if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      return value; // Only one node in the list
    }
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    const value = current.next.value;
    current.next = null;
    return value; // Return the removed value
  }

  // Method to display all nodes in the list
  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Example usage
const tasks = new LinkedList();
tasks.add("Buy groceries");
tasks.add("Clean the house");
tasks.add("Pay bills");

console.log("Tasks in the list:");
tasks.display();

console.log("\nRemoving the last task:");
tasks.remove();
tasks.display();

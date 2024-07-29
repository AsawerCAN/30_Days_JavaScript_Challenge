class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element from the queue
  dequeue() {
    if (this.items.length === 0) {
      return "Underflow"; // Indicates the queue is empty
    }
    return this.items.shift();
  }

  // View the front element of the queue
  front() {
    if (this.items.length === 0) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Print all elements in the queue
  printQueue() {
    return this.items.join(" ");
  }
}

// Create a new queue
let customerQueue = new Queue();

// Add customers to the queue
customerQueue.enqueue("Alice");
customerQueue.enqueue("Bob");
customerQueue.enqueue("Charlie");

// View the first customer
console.log(customerQueue.front());

// Remove the first customer
console.log(customerQueue.dequeue());

// View the first customer after dequeuing
console.log(customerQueue.front());

// Check if the queue is empty
console.log(customerQueue.isEmpty());

// Print all customers in the queue
console.log(customerQueue.printQueue());

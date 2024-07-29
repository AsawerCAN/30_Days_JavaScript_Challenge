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

function simulatePrinterQueue() {
  let printerQueue = new Queue();

  // Add print jobs to the queue
  printerQueue.enqueue("Print Job 1: Document A");
  printerQueue.enqueue("Print Job 2: Document B");
  printerQueue.enqueue("Print Job 3: Document C");

  // Process print jobs
  while (!printerQueue.isEmpty()) {
    console.log("Processing:", printerQueue.dequeue());
  }
}

// Example usage
simulatePrinterQueue();

// Activity 5: Concurrent Promises

// Task 9:
const delayPromise = (message, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};

const promise1 = delayPromise("First promise resolved", 3000);
const promise2 = delayPromise("Second promise resolved", 1000);
const promise3 = delayPromise("Third promise resolved", 2000);

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(`First resolved value: ${result}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });

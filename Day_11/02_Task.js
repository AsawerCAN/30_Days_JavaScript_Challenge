// Activity 1: Understanding Promises

// Task 2:
const rejectAfterDelay = (message, delay) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(message));
    }, delay);
  });
};

const errorPromise = rejectAfterDelay(
  "Something went wrong after 2 seconds!",
  2000
);

errorPromise
  .then((result) => {
    console.log("This will not be logged because the promise rejects.");
  })
  .catch((error) => {
    console.error(`Caught an error: ${error.message}`);
  });

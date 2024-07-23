// Activity 1: Understanding Promises

// Task 1:
const resolveAfterDelay = (message, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};

const successPromise = resolveAfterDelay(
  "This message was resolved after 2 seconds!",
  2000
);

successPromise.then((result) => {
  console.log(result);
});

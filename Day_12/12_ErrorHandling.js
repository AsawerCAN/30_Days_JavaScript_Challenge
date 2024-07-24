// Activity 1: Basic Error Handling with Try-Catch

// Task 1:
function checkPositiveNumber(num) {
  if (num < 0) {
    throw new Error("The number is negative.");
  }
  return "The number is positive!";
}

try {
  let result = checkPositiveNumber(-5);
  console.log(result);
} catch (error) {
  console.error("Error:", error.message);
}

// Task 2:
function divideNumbers(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return numerator / denominator;
}

try {
  let result = divideNumbers(10, 0);
  console.log(result);
} catch (error) {
  console.error("Error:", error.message);
}

/* =========================== */

// Activity 2: Finally Block

// Task 3:
function parseJsonString(jsonString) {
  try {
    console.log("Attempting to parse JSON string...");
    let parsedData = JSON.parse(jsonString);
    console.log("JSON parsed successfully:", parsedData);
  } catch (error) {
    console.error("Error occurred while parsing JSON:", error.message);
  } finally {
    console.log("Execution finished, inside the finally block.");
  }
}

let invalidJsonString = '{ "name": "John", "age": 30 ';
parseJsonString(invalidJsonString);

/* =========================== */

// Activity 3: Custom Error Objects

// Task 4:
class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function checkAge(age) {
  if (age < 0 || age > 150) {
    throw new InvalidAgeError("Age must be between 0 and 150.");
  }
  return "Age is valid!";
}

try {
  let result = checkAge(-5);
  console.log(result);
} catch (error) {
  if (error instanceof InvalidAgeError) {
    console.error("InvalidAgeError:", error.message);
  } else {
    console.error("An unexpected error occurred:", error.message);
  }
} finally {
  console.log("Execution finished.");
}

// Task 5:
class EmptyStringError extends Error {
  constructor(message) {
    super(message);
    this.name = "EmptyStringError";
  }
}

function validateInput(input) {
  if (input.trim() === "") {
    throw new EmptyStringError("Input cannot be an empty string.");
  }
  return "Input is valid!";
}

try {
  let userInput = "   ";
  let result = validateInput(userInput);
  console.log(result);
} catch (error) {
  if (error instanceof EmptyStringError) {
    console.error("EmptyStringError:", error.message);
  } else {
    console.error("An unexpected error occurred:", error.message);
  }
} finally {
  console.log("Execution finished, inside the finally block.");
}

/* =========================== */

// Activity 4: Error Handling in Promises

// Task 6:
function randomPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();

    if (randomNumber >= 0.5) {
      resolve("The promise resolved successfully!");
    } else {
      reject(new Error("The promise was rejected."));
    }
  });
}

randomPromise()
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

//   Task 7:
function randomPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();

    if (randomNumber >= 0.5) {
      resolve("The promise resolved successfully!");
    } else {
      reject(new Error("The promise was rejected."));
    }
  });
}

async function randomAsyncFunction() {
  try {
    let result = await randomPromise();
    console.log("Success:", result);
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
}

randomAsyncFunction();

/* =========================== */

// Activity 5: Graceful Error Handling in Fetch

// Task 8:
async function fetchDataFromUrl(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Oops! Something went wrong:", error.message);
  }
}

const invalidUrl = "https://invalid.url.example";
fetchDataFromUrl(invalidUrl);

// Task 9:
async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Unable to fetch data. HTTP Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received successfully:", data);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

const invalidUrl1 = "https://example.com/invalid-endpoint";

fetchData(invalidUrl1);

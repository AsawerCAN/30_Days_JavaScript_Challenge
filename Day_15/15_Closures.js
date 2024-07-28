// Activity 1: Understanding Closures

// Task 1:
function scoreTracker(playerName) {
  let score = 0;

  return function (points) {
    score += points;

    return `${playerName}'s score: ${score}`;
  };
}

const myScore = scoreTracker("Asawer");

console.log(myScore(9));
console.log(myScore(8));

// Task 2:
function bookTracker(readerName) {
  let booksRead = 0;

  return {
    readBook: function () {
      booksRead += 1;

      if (booksRead === 1) {
        return `${readerName} has read ${booksRead} book.`;
      } else {
        return `${readerName} has read ${booksRead} books.`;
      }
    },
  };
}

const aliceBookTracker = bookTracker("Alice");
console.log(aliceBookTracker.readBook());
console.log(aliceBookTracker.readBook());

/* ========================= */

// Activity 2: Practical Closures

// Task 3:
function memberIDGenerator() {
  let lastID = Math.floor(Math.random() * 100) + 1;

  return function () {
    const currentID = lastID;
    lastID += 1;
    return `Member ID: ${currentID}`;
  };
}

const generateMemberID = memberIDGenerator();

console.log(generateMemberID());
console.log(generateMemberID());
console.log(generateMemberID());

// Task 4:
function createGreeter(userName) {
  return function () {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
      greeting = "Good morning";
    } else if (currentHour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    return `${greeting}, ${userName}!`;
  };
}

const greetAlice = createGreeter("Alice");
console.log(greetAlice());

/* ========================= */

// Activity 3: Closures in Loops

// Task 5:
function createTaskReminders(tasks) {
  const reminders = [];

  for (let i = 0; i < tasks.length; i++) {
    reminders.push(
      (function (index) {
        return function () {
          console.log(`Task ${index + 1}: ${tasks[index]}`);
        };
      })(i)
    );
  }

  return reminders;
}

const tasks = ["Buy groceries", "Complete Work", "Go to gym", "Dinner"];

const taskReminders = createTaskReminders(tasks);

taskReminders.forEach((reminder) => reminder());

/* ========================= */

// Activity 4: Module Pattern

// Task 6:
function createLibrary() {
  let books = [];

  return {
    addBook: function (book) {
      books.push(book);
      console.log(`"${book}" has been added to the library.`);
    },
    removeBook: function (book) {
      const index = books.indexOf(book);
      if (index !== -1) {
        books.splice(index, 1);
        console.log(`"${book}" has been removed from the library.`);
      } else {
        console.log(`"${book}" is not found in the library.`);
      }
    },
    listBooks: function () {
      if (books.length > 0) {
        console.log("Books in the library:");
        books.forEach((book, index) => {
          console.log(`${index + 1}. ${book}`);
        });
      } else {
        console.log("The library is empty.");
      }
    },
  };
}

const myLibrary = createLibrary();

myLibrary.addBook("The Great Gatsby");
myLibrary.addBook("1984");
myLibrary.addBook("To Kill a Mockingbird");

myLibrary.listBooks();

myLibrary.removeBook("1984");
myLibrary.listBooks();

myLibrary.removeBook("Moby Dick");

/* ========================= */

// Activity 5: Memoization

// Task 7:
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log(`Fetching from cache for arguments: ${key}`);
      return cache[key];
    } else {
      console.log(`Calculating result for arguments: ${key}`);
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const memoizedCelsiusToFahrenheit = memoize(celsiusToFahrenheit);

function convertAndDisplay(celsius) {
  const fahrenheit = memoizedCelsiusToFahrenheit(celsius);
  console.log(`${celsius}°C is ${fahrenheit}°F`);
}

convertAndDisplay(25);
convertAndDisplay(25);
convertAndDisplay(30);
convertAndDisplay(30);

// Task 8:
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log(`Fetching from cache for arguments: ${key}`);
      return cache[key];
    } else {
      console.log(`Calculating result for arguments: ${key}`);
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

function displayFactorial(n) {
  const result = memoizedFactorial(n);
  console.log(`Factorial of ${n} is ${result}`);
}

displayFactorial(5);
displayFactorial(5);
displayFactorial(6);
displayFactorial(6);

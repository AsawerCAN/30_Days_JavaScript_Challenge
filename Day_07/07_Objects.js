// Activity 1: Object Creation and Access

const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
};

// Task 1:
console.log(book);

// Task 2:
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);

/* ===================== */
// Activity 2: Object Methods

const book1 = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,

  // Task 3:
  getDetails: function () {
    return `Book's title "${this.title}" and author "${this.author}"`;
  },

  // Task 4:
  updateYear: function (newYear) {
    this.year = newYear;
  },
};

console.log(book1.getDetails());

book1.updateYear(2010);
console.log(book1);
console.log(
  `Book's title "${book1.title}", Author "${book1.author}" and Published Year: ${book1.year}`
);

/* ===================== */
// Activity 3: Nested Objects

const library = {
  name: "NY Library",
  books: [
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2008,
    },
    {
      title: "Full-Stack JavaScript",
      author: "Eric Freeman",
      year: 2021,
    },
    {
      title: "Mastering Full-Stack Development",
      author: "Jane Smith",
      year: 2022,
    },
  ],
};

// Task 5:
console.log(library);

// Task 6:
console.log(`Library Name: ${library.name}`);

library.books.forEach((book) => console.log(`Book TItle: ${book.title}`));

/* ===================== */
// Activity 4: this keyword

// Task 7:
const book2 = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,

  getDetails: function () {
    return `Book's title "${this.title}" and year "${this.year}"`;
  },
};

console.log(book2.getDetails());

console.log("============");
/* ===================== */
// Activity 5: Object Iteration

const book3 = {
  title: "Full-Stack JavaScript",
  author: "Eric Freeman",
  year: 2021,
  publisher: "Tech Press",
};

// Task 7:
for (let key in book3) {
  if (book3.hasOwnProperty(key)) {
    console.log(`${key}: ${book3[key]}`);
  }
}

// Task 9:
console.log("Keys:", Object.keys(book3));
console.log("Values:", Object.values(book3));

// Activity 1: Class Definition

// Task 1:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `🌟 Hello there! I'm ${this.name}, a ${this.age}-year-old explorer of the digital cosmos. 🚀`;
  }
}

let adventurer = new Person("Luna Stardust", 28);

console.log(adventurer.greet());

// Task 2:
class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `🌟 Hello there! I'm ${this.name}, a ${this.age}-year-old explorer of the digital cosmos. 🚀`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(
      `✨ Time flies! ${this.name} is now ${this.age} years young. Keep shining! ✨`
    );
  }
}

let adventurer1 = new Person1("Luna Stardust", 28);

console.log(adventurer1.greet());

adventurer1.updateAge(29);

/* ========================== */

// Activity 2: Class Inheritance

// Task 3:
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Student extends Person2 {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }

  getStudentID() {
    return this.studentID;
  }
}

const student = new Student("Avery Johnson", 21, "S123456");

console.log(student.getStudentID());

// Task 4:
class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Student1 extends Person3 {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }

  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentID}.`;
  }

  getStudentID() {
    return this.studentID;
  }
}

const student1 = new Student1("Avery Johnson", 21, "S123456");

console.log(student.greet());

/* ========================== */

// Activity 3: Static Methods and Properties

// Task 5:
class Person4 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  static genericGreeting() {
    return "Hello, welcome to our community!";
  }
}

class Student3 extends Person4 {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }

  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentID}.`;
  }

  getStudentID() {
    return this.studentID;
  }
}

console.log(Person4.genericGreeting());

// Task 6:
class Person6 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  static genericGreeting() {
    return "Hello, welcome to our community!";
  }
}

class Student5 extends Person6 {
  static studentCount = 0;

  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
    Student5.studentCount += 1;
  }

  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentID}.`;
  }

  getStudentID() {
    return this.studentID;
  }

  static getStudentCount() {
    return `Total number of students: ${Student5.studentCount}`;
  }
}

const student1A = new Student5("Jordan", 25, "L987654");
const student2A = new Student5("Taylor", 22, "L123456");

console.log(Student5.getStudentCount());

/* ========================== */

// Activity 4: Getters and Setters

// Task 7:
class Person7 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }

  static genericGreeting() {
    return "Hello, welcome to our community!";
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student6 extends Person7 {
  static studentCount = 0;

  constructor(firstName, lastName, age, studentID) {
    super(firstName, lastName, age);
    this.studentID = studentID;
    Student6.studentCount += 1;
  }

  greet() {
    return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentID}.`;
  }

  getStudentID() {
    return this.studentID;
  }

  static getStudentCount() {
    return `Total number of students: ${Student6.studentCount}`;
  }
}

const person = new Person7("Emma", "Watson", 30);

console.log(person.fullName);

// Task 8:
class Person8 {
  constructor(givenName, surname, age) {
    this.givenName = givenName;
    this.surname = surname;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.givenName} ${this.surname} and I am ${this.age} years old.`;
  }

  static genericGreeting() {
    return "Hello, welcome to our community!";
  }

  get fullName() {
    return `${this.givenName} ${this.surname}`;
  }

  set name({ givenName, surname }) {
    this.givenName = givenName;
    this.surname = surname;
  }
}

const individual = new Person8("Emma", "Watson", 30);

console.log("Initial full name:", individual.fullName); // Output: Emma Watson

individual.name = { givenName: "Olivia", surname: "Rodriguez" };

console.log("Updated full name:", individual.fullName); // Output: Olivia Rodriguez

/* ========================== */

// Activity 5: Private Fields (Optional)

// Task 9:
class Account {
  #balance;

  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative.");
    }
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive.");
    }
    this.#balance += amount;
    console.log(`Deposited $${amount}. New balance is $${this.#balance}.`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive.");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds.");
    }
    this.#balance -= amount;
    console.log(`Withdrew $${amount}. New balance is $${this.#balance}.`);
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new Account(1000);

myAccount.deposit(500);
myAccount.withdraw(200);

console.log(`Current balance: $${myAccount.getBalance()}`);

//   Task 10:
class Account1 {
  #balance;

  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative.");
    }
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive.");
    }
    this.#balance += amount;
    console.log(`Deposited $${amount}. New balance is $${this.#balance}.`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive.");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds.");
    }
    this.#balance -= amount;
    console.log(`Withdrew $${amount}. New balance is $${this.#balance}.`);
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount1 = new Account1(500);

console.log(`Initial balance: $${myAccount1.getBalance()}`);

myAccount1.deposit(200);
console.log(`Balance after deposit: $${myAccount1.getBalance()}`);
console.log(`Balance after withdrawal: $${myAccount1.getBalance()}`);

myAccount1.deposit(300);
console.log(`Balance after another deposit: $${myAccount1.getBalance()}`);

myAccount1.withdraw(100);
console.log(`Balance after another withdrawal: $${myAccount1.getBalance()}`);

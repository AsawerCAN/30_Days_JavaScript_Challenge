const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28,
  hobbies: ["reading", "travelling", "coding"],
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  birthday() {
    this.age += 1;
  },
  introduce() {
    return `Hello, my name is ${this.fullName()} and I am ${
      this.age
    } years old. I love ${this.hobbies.join(", ")}.`;
  },
};

export default person;

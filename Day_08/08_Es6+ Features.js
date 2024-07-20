// Activity 1: Template Literals

let name = "john";
let age = 23;

// Task 1:
console.log(`I am ${name} and ${age} years old`);

// Task 2:
console.log(
  `My name is ${name}. 
I am ${age} years old`
);

/* ===================== */
// Activity 2: Destructuring

// Task 3:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [firstElem, secondElem] = array;
console.log(firstElem, secondElem);

// Task 4:
const person = { name1: "Dave", age1: 36 };

const { name1, age1 } = person;
console.log(`I am ${name1} and ${age1} years old`);

/* ===================== */
// Activity 3: Spread and Rest Operators

// Task 5:
const arr2 = [0, 1, 2, 3, 4];
const newArr2 = [...arr2, 5, 6, 7, 8, 9];

console.log(newArr2);

// Task 6:
function sumNums(...nums) {
  return nums.reduce((accumulator, currValue) => accumulator + currValue, 0);
}

console.log(sumNums(2, 4, 6));

/* ===================== */
// Activity 4: Default Parameters

// Task 7:
function calculateProduct(multiplier, factor = 2) {
  return multiplier * factor;
}

console.log(calculateProduct(5));

/* ===================== */
// Activity 5: Enhanced Object Literals

// Task 8:
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  mileage: 15000,

  getSummary() {
    return `${this.make} ${this.model} (${this.year}) - ${this.mileage} miles`;
  },

  needsMaintenance() {
    return this.mileage > 100000;
  },
};

console.log(car);

console.log("Car Summary:", car.getSummary());
console.log("Needs Maintenance:", car.needsMaintenance());

// Task 9:
const productId = "id";
const productName = "name";
const productPrice = "price";

const id = 101;
const namee = "Wireless Mouse";
const price = 25.99;

const product = {
  [productId]: id,
  [productName]: namee,
  [productPrice]: price,

  getProductInfo() {
    return `Product ID: ${this[productId]}, Name: ${
      this[productName]
    }, Price: $${this[productPrice].toFixed(2)}`;
  },
};

console.log(product);

console.log("Product Info:", product.getProductInfo());

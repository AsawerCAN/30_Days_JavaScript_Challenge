// Activity 1: If-Else Statement

// Task 1:
let num = -99;

if (num < 0) {
  console.log(`${num} is negative number`);
} else if (num > 0) {
  console.log(`${num} is positive number`);
} else {
  console.log("Zero");
}

// Task 2:
const age = 19;

if (age >= 18) {
  console.log(`Age ${age}: You are eligible for voting`);
} else {
  console.log(`Age ${age}: Age must be 18 or above for voting`);
}

/* ======================== */
// Activity 2: Nested if-Else Statements

// Task 3:
let num1 = 233;
let num2 = 3332;
let num3 = 2242;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(`${num1} is greater than other`);
  } else {
    console.log(`${num3} is the greatest`);
  }
} else {
  if (num2 > num3) {
    console.log(`${num2} is the greatest`);
  } else {
    console.log(`${num3} is the greatest`);
  }
}

/* ======================== */
// Activity 3: Switch Case

// Task 4:
let dayNum = 7;

let dayName;

switch (dayNum) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day number";
}

console.log(dayName);

// Task 5:
let score = 85;
let grade;

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80 && score < 90:
    grade = "B";
    break;
  case score >= 70 && score < 80:
    grade = "C";
    break;
  case score >= 60 && score < 70:
    grade = "D";
    break;
  case score >= 40 && score < 60:
    grade = "E";
    break;
  case score >= 0 && score < 40:
    grade = "F";
    break;
  default:
    grade = "Invalid score";
}

console.log(`Grade: ${grade}`);

/* ======================== */
// Activity 4: Conditional (Ternary) Operator

// Task 6:
let number = 2;
let checkNum = number % 2 === 0 ? "even" : "odd";

console.log(`${number} is ${checkNum} number`);

// Task 7:
let year = 2000;
let isLeapYear = (year % 4 === 0 && year % 400 === 0) || year % 100 !== 0;
if (isLeapYear) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

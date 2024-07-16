// Activity 1: For Loop

// Task 1:
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// Task 2:
for (let n = 1; n < 11; n++) {
  console.log(`5 x ${n} = ` + 5 * n);
}

/* ===================== */

// Activity 2: While Loop

// Task 3:
let sumNum = 0;
let num = 1;

while (num <= 10) {
  sumNum += num;
  num++;
}

console.log(`Sum of numbers from 1 to 10: ${sumNum}`);

// Task 4:
let num1 = 10;

while (num1 >= 1) {
  console.log(num1);
  num1--;
}

console.log("|==================|");
/* ===================== */

// Activity 3: D0 While Loop

// Task 5:
let number = 1;
do {
  console.log(number);
  number++;
} while (number <= 5);

console.log("|==================|");
// Task 6:
let number1 = 3;
let factorial = 1;
let currentNum = number1;

do {
  factorial *= currentNum;
  currentNum--;
} while (currentNum > 0);

console.log(`Factorial of ${number1}: ${factorial}`);

/* ===================== */

// Activity 5: Nested Loop

// Task 7:
for (let n = 1; n <= 5; n++) {
  let pattern = "";
  for (let m = 1; m <= n; m++) {
    pattern += "*";
  }
  console.log(pattern);
}

/* ===================== */

// Activity 6: Loop Control Statements

// Task 8:
for (let a = 1; a <= 10; a++) {
  if (a === 5) {
    continue;
  } else {
    console.log(a);
  }
}

console.log("|==================|");
// Task 9:
for (let b = 1; b <= 10; b++) {
  if (b === 7) {
    break;
  } else {
    console.log(b);
  }
}

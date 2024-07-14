// Activity 1: Arithmetic Operators

// Task 1:
const num = 2;
const num1 = 5;
const add = num + num1;
console.log(`${num} + ${num1} = ${add}`);

// Task 2:
const num2 = 100;
const num3 = 99;
const sub = num2 - num3;
console.log(`${num2} - ${num3} = ${sub}`);

// Task 3:
const num4 = 6;
const num5 = 9;
const mul = num4 * num5;
console.log(`${num4} x ${num5} = ${mul}`);
// Task 4:
const num6 = 23;
const num7 = 99;
const divide = num6 / num7;
console.log(`${num6} / ${num7} = ${divide}`);
// Task 5:
const num8 = 60;
const num9 = 40;
const remainder = num8 % num9;
console.log(`${num8} % ${num9} = ${remainder}`);

// Activity 2: Assignment Operators

// Task 6:
let number = 23;
const addValue = 6;

number += addValue;
console.log(`After adding ${addValue}, number = ${number}`);

// Task 7:
let number1 = 23;
const subValue = 6;

number1 -= subValue;
console.log(`After sub ${subValue}, number1 = ${number1}`);

// Activity 3: Comparison Operators

// Task 8:
let x = 1;
let y = 2;

const isGreater = x > y;
console.log(x + " > " + y + " = " + ` ${isGreater}`);

const isLesser = x < y;
console.log(x + " < " + y + " = " + ` ${isLesser}`);

// Task 9:
let m = 199;
let n = 198;

const isGreaterOrEqual = m >= n;
console.log(m + " >= " + n + " = " + ` ${isGreaterOrEqual}`);

const isLesserOrEqual = m <= n;
console.log(m + " <= " + n + " = " + ` ${isLesserOrEqual}`);

// Task 10:
let a = 6;
let b = "6";

const isEqual = a == b;
console.log(a + " == " + b + " : " + isEqual);

const isStrictEqual = a === b;
console.log(a + " === " + b + " : " + isStrictEqual);

// Activity 4: Logical Operators

let p = 1;
let q = 2;
let r = 3;

// Task 11:
const condition = p < q && q > r;
console.log(p + " < " + q + " && " + q + " < " + r + " : " + condition);

// Task 12:
const condition1 = p < q || q > r;
console.log(p + " < " + q + " || " + q + " < " + r + " : " + condition1);

// Task 13:
const condition2 = p < q !== q > r;
console.log(p + " < " + q + " !== " + q + " < " + r + " : " + condition2);

/* ========================== */

// Activity 5: Ternary Operators

// Task 14:

let n1 = -99;

const checkResult = n1 > 0 ? "Postive number" : "Negative number";
console.log(`Number ${n1} is : `, checkResult);

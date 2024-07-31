// Activity 1: Basic Regular Expressions

// Task 1:
const text =
  "JavaScript is a versatile language. Learning JavaScript can be fun and rewarding. Many websites use JavaScript for dynamic content.";

const regex = /JavaScript/g;

const matches = text.match(regex);

console.log(matches);

// Task 2:
const text1 =
  "In the year 2024, there were 7,842 JavaScript developers attending 123 conferences.";

const regex1 = /\d+/g;

const matches1 = text1.match(regex1);

console.log(matches1);

/* ============================== */

// Activity 2: Character Classes and Quantifiers

// Task 3:
const text2 =
  "In New York, the Statue of Liberty is a famous Landmark. People often Visit Central Park and the Empire State Building.";

const regex2 = /\b[A-Z][a-z]*\b/g;

const matches2 = text2.match(regex2);

console.log(matches2);

// Task 4:
const report =
  "On Day 1, the team covered 12 kilometers. By Day 3, they had climbed 450 meters in altitude. On the final day, they discovered 7 rare species and took 85 samples.";

const regex3 = /\d+/g;

const matches3 = report.match(regex3);

console.log(matches3);

/* ============================== */

// Activity 3: Grouping and Capturing

// Task 5:
const phoneNumber = "(123) 456-7890";

const regex5 = /\((\d{3})\) (\d{3})-(\d{4})/;

const matches5 = phoneNumber.match(regex5);

if (matches5) {
  const [fullMatch, areaCode, centralOfficeCode, lineNumber] = matches5;
  console.log(`Full Match: ${fullMatch}`);
  console.log(`Area Code: ${areaCode}`);
  console.log(`Central Office Code: ${centralOfficeCode}`);
  console.log(`Line Number: ${lineNumber}`);
} else {
  console.log("No matches found");
}

// Task 6:
const email = "john.doe@example.com";

const regex6 = /([^@]+)@([^@]+\.[a-zA-Z]{2,})/;

const matches6 = email.match(regex6);

if (matches6) {
  const [fullMatch, username, domain] = matches6;
  console.log(`Full Match: ${fullMatch}`);
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
} else {
  console.log("No matches found");
}

/* ============================== */

// Activity 4: Assertions and Boundaries

// Task 7:
const text7 = "Hello, world! Hello again.";

const regex7 = /^\w+/;

const matches7 = text7.match(regex7);

if (matches7) {
  console.log(`Match at the beginning of the string: ${matches7[0]}`);
} else {
  console.log("No matches found at the beginning of the string");
}

// Task 8:
const text8 = "Hi, This is the end.";

const regex8 = /\b\w+\b$/;

const matches8 = text8.match(regex8);

if (matches8) {
  console.log(`Match at the end of the string: ${matches8[0]}`);
} else {
  console.log("No matches found at the end of the string");
}

/* ============================== */

// Activity 5: Practical Applications

// Task 9:
function validatePassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`])[A-Za-z\d!@#$%^&*()_+{}\[\]:;"'<>,.?/~`]{8,}$/;

  const isValid = regex.test(password);

  if (isValid) {
    console.log("Password is valid.");
  } else {
    console.log(
      "Password is invalid. It must include at least one uppercase letter, one lowercase letter, one digit, and one special character."
    );
  }
}

const passwords = ["P@ssw0rd", "Password123", "1234abcd", "A1!b2@c3#d4"];

passwords.forEach((password) => {
  console.log(`Password Checking: ${password}`);
  validatePassword(password);
  console.log("-----");
});

// Task 10:
function validateURL(url) {
  const regex =
    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/[a-zA-Z0-9-_?=&%]*)?$/;

  const isValid = regex.test(url);

  if (isValid) {
    console.log("URL is valid.");
  } else {
    console.log("URL is invalid.");
  }
}

const urls = [
  "https://www.example.com",
  "http://example.com/path/to/resource",
  "www.example.com",
  "example.com",
  "https://subdomain.example.com?query=123&other=value",
  "ftp://example.com", // Invalid (not http or https)
  "http://example", // Invalid (missing top-level domain)
  "https://example.com:8080/path/to/resource", // Valid (port included)
  "http://-example.com", // Invalid (starts with a hyphen)
];

urls.forEach((url) => {
  console.log(`Testing URL: ${url}`);
  validateURL(url);
  console.log("--------");
});

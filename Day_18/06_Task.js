function countCharacterOccurrences(str) {
  const charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

const exampleString = "hello world";
const characterCounts = countCharacterOccurrences(exampleString);
console.log("Character Counts:", characterCounts);

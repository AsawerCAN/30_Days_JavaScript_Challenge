import getRandomQuote from "./quoteGenerator.js";

const quote = getRandomQuote();
console.log(`"${quote.text}" - ${quote.author}`);

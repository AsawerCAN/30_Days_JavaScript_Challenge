const quotes = [
  {
    author: "Albert Einstein",
    text: "Life is like riding a bicycle. To keep your balance you must keep moving.",
  },
  { author: "Leonardo da Vinci", text: "Learning never exhausts the mind." },
  {
    author: "Isaac Newton",
    text: "If I have seen further it is by standing on the shoulders of Giants.",
  },
  {
    author: "Galileo Galilei",
    text: "You cannot teach a man anything; you can only help him find it within himself.",
  },
  {
    author: "Marie Curie",
    text: "Nothing in life is to be feared, it is only to be understood.",
  },
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export default getRandomQuote;

document.getElementById("saveButton").addEventListener("click", () => {
  const quote = document.getElementById("quoteInput").value;
  if (quote) {
    localStorage.setItem("favoriteQuote", quote);
    alert("Quote saved!");
  } else {
    alert("Please enter a quote before saving.");
  }
});

document.getElementById("retrieveButton").addEventListener("click", () => {
  const savedQuote = localStorage.getItem("favoriteQuote");
  if (savedQuote) {
    document.getElementById(
      "displayQuote"
    ).innerText = `Your favorite quote: "${savedQuote}"`;
  } else {
    alert("No quote found. Please save a quote first.");
  }
});

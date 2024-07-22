// Activity 1: Selecting and Manipulating Element

// Task 1:
document.getElementById("oldTextContent").textContent = "Text Content Changed";

// Task 2:
document.querySelector(".changeBg").style.backgroundColor = "purple";

/* ======================= */

// Activity 2: Creating and Appending Elements

// Task 3:
const newDiv = document.createElement("div");
newDiv.textContent = "New div element";
document.body.appendChild(newDiv);

// Task 4:
const newListItem = document.createElement("li");
newListItem.textContent = "New List Item";
const ulList = document.getElementById("myList");
ulList.appendChild(newListItem);

/* ======================= */

// Activity 3: Removing Elements

// Task 5:
const removeElement = document.getElementById("removeEL");
removeElement.remove();

// Task 6:
const contentSection = document.getElementById("contentSection");

if (contentSection.lastElementChild) {
  contentSection.removeChild(contentSection.lastElementChild);
}

/* ======================= */

// Activity 4: Modifying Attributes and Classes

// Task 7:
const updatedImage = document.querySelector(".firstImage");

updatedImage.src = "./updatedImg.png";
updatedImage.alt = "updated image";

// Task 8:
const element = document.querySelector("#myElement");

element.classList.add("myClass");
element.classList.remove("myClass");

/* ======================= */

// Activity 5: Event Handling

// Task 9:
const quotes = [
  '"The best way to get started is to quit talking and begin doing." - Walt Disney',
  '"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty." - Winston Churchill',
  '"Don’t let yesterday take up too much of today." - Will Rogers',
];

const button = document.querySelector("#changeQuoteButton");
const paragraph = document.querySelector("#quoteParagraph");

button.addEventListener("click", () => {
  const randomQuote = Math.floor(Math.random() * quotes.length);

  paragraph.textContent = quotes[randomQuote];
});

// Task 10:
const cardElement = document.querySelector("#card");

cardElement.addEventListener("mouseover", () => {
  cardElement.style.borderColor = "blue";
});

cardElement.addEventListener("mouseout", () => {
  cardElement.style.borderColor = "#000";
});

// Activity 1: Basic Event Handling

// Task 1:
const funFacts = [
  "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
  "A group of flamingos is called a 'flamboyance.'",
  "Bananas are berries, but strawberries aren't.",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
  "Octopuses have three hearts and blue blood.",
];

const button = document.querySelector("#funFactButton");
const paragraph = document.querySelector("#funFactParagraph");

button.addEventListener("click", () => {
  const randomFunFact = Math.floor(Math.random() * funFacts.length);

  console.log("Generated Random Index:", randomFunFact);
  console.log("Selected Fun Fact:", funFacts[randomFunFact]);

  paragraph.textContent = funFacts[randomFunFact];
});

// Task 2:

const image = document.querySelector("#toggleImage");

let isVisible = true;

image.addEventListener("dblclick", () => {
  if (isVisible) {
    image.style.opacity = "0";
  } else {
    image.style.opacity = "1";
  }

  isVisible = !isVisible;
});

/* ===================== */

// Activity 2: Mouse Events

const circleButton = document.querySelector("#circleButton");

// Task 3:
circleButton.addEventListener("mouseover", () => {
  circleButton.style.backgroundColor = "purple";
});

// Task 4:
circleButton.addEventListener("mouseout", () => {
  circleButton.style.backgroundColor = "violet";
});

/* ===================== */

// Activity 3: Keyboard Events

const logInput = document.querySelector("#logInput");

// Task 5:
logInput.addEventListener("keydown", (event) => {
  console.log(`Key down: ${event.key}`);
});

// Task 6:
logInput.addEventListener("keyup", (event) => {
  console.log(`Key up: ${event.key}`);
});

/* ===================== */

// Activity 4: Form Events

// Task 7:
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);

  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});

// Task 8:
const fruitSelect = document.querySelector("#fruitSelect");
const selectedFruit = document.querySelector("#selectedFruit");

fruitSelect.addEventListener("change", () => {
  const selectedValue = fruitSelect.value;

  selectedFruit.textContent = `Selected fruit: ${selectedValue}`;
});

/* ===================== */

// Activity 5: Event Delegation

// Task 9:
const itemList = document.querySelector("#itemList");

// Add a click event listener to the list
itemList.addEventListener("click", (event) => {
  // Check if the clicked element is a list item
  if (event.target && event.target.nodeName === "LI") {
    // Log the text content of the clicked list item
    console.log(`Clicked item: ${event.target.textContent}`);
  }
});

// Task 10:
const itemList1 = document.querySelector("#itemList1");
const addItemButton1 = document.querySelector("#addItemButton1");

const addListItem = () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemList.children.length + 1}`;
  itemList.appendChild(newItem);
};

addItemButton1.addEventListener("click", addListItem);

itemList.addEventListener("click", (event) => {
  if (event.target && event.target.nodeName === "LI") {
    console.log(`Clicked item: ${event.target.textContent}`);
  }
});

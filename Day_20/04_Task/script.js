document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("saveButton");
  const removeButton = document.getElementById("removeButton");
  const log = document.getElementById("log");

  const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  };

  const logLocalStorage = (message) => {
    log.innerText += `${message}\n${JSON.stringify(localStorage, null, 2)}\n\n`;
  };

  saveButton.addEventListener("click", () => {
    localStorage.setItem("favoriteBook", JSON.stringify(book));
    logLocalStorage("After Saving:");
  });

  removeButton.addEventListener("click", () => {
    logLocalStorage("Before Removal:");
    localStorage.removeItem("favoriteBook");
    logLocalStorage("After Removal:");
  });

  logLocalStorage("Initial LocalStorage Content:");
});

document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("saveButton");
  const removeButton = document.getElementById("removeButton");
  const log = document.getElementById("log");

  const preferences = {
    theme: "Dark",
    language: "English",
  };

  const logSessionStorage = (message) => {
    log.innerText += `${message}\n${JSON.stringify(
      sessionStorage,
      null,
      2
    )}\n\n`;
  };

  saveButton.addEventListener("click", () => {
    sessionStorage.setItem("userPreferences", JSON.stringify(preferences));
    logSessionStorage("After Saving:");
  });

  removeButton.addEventListener("click", () => {
    logSessionStorage("Before Removal:");
    sessionStorage.removeItem("userPreferences");
    logSessionStorage("After Removal:");
  });

  logSessionStorage("Initial SessionStorage Content:");
});

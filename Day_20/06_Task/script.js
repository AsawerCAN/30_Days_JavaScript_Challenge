document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("saveButton");
  const retrieveButton = document.getElementById("retrieveButton");
  const log = document.getElementById("log");

  const logMessage = (message) => {
    log.innerText += `${message}\n`;
  };

  saveButton.addEventListener("click", () => {
    const theme = document.getElementById("themeSelect").value;
    const language = document.getElementById("languageSelect").value;

    const userPreferences = {
      theme: theme,
      language: language,
    };

    sessionStorage.setItem("userPreferences", JSON.stringify(userPreferences));
    logMessage(
      `Preferences saved: ${JSON.stringify(userPreferences, null, 2)}`
    );
  });

  retrieveButton.addEventListener("click", () => {
    const savedPreferences = sessionStorage.getItem("userPreferences");
    if (savedPreferences) {
      const userPreferences = JSON.parse(savedPreferences);
      logMessage(
        `Retrieved preferences: ${JSON.stringify(userPreferences, null, 2)}`
      );
    } else {
      logMessage("No preferences found in sessionStorage.");
    }
  });

  logMessage("Initial SessionStorage Content:");
});

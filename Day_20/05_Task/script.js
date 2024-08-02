document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("saveButton");
  const retrieveButton = document.getElementById("retrieveButton");
  const log = document.getElementById("log");

  const logMessage = (message) => {
    log.innerText += `${message}\n`;
  };

  saveButton.addEventListener("click", () => {
    const message = document.getElementById("messageInput").value;
    if (message) {
      sessionStorage.setItem("temporaryMessage", message);
      logMessage(`Message saved: ${message}`);
    } else {
      alert("Please enter a message before saving.");
    }
  });

  retrieveButton.addEventListener("click", () => {
    const savedMessage = sessionStorage.getItem("temporaryMessage");
    if (savedMessage) {
      logMessage(`Retrieved message: ${savedMessage}`);
    } else {
      logMessage("No message found in sessionStorage.");
    }
  });
});

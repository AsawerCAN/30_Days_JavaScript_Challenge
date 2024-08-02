document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("saveButton");
  const log = document.getElementById("log");

  const saveToStorage = (key, value) => {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
  };

  const logStorageValues = (key) => {
    const localValue = localStorage.getItem(key);
    const sessionValue = sessionStorage.getItem(key);

    log.innerText += `Key: ${key}\n`;
    log.innerText += `LocalStorage Value: ${localValue}\n`;
    log.innerText += `SessionStorage Value: ${sessionValue}\n\n`;
  };

  saveButton.addEventListener("click", () => {
    const key = document.getElementById("storageKey").value;
    const value = document.getElementById("storageValue").value;

    if (key && value) {
      saveToStorage(key, value);
      logStorageValues(key);
    } else {
      log.innerText += "Please enter both key and value.\n";
    }
  });

  log.innerText += "Ready to save and log data.\n";
});

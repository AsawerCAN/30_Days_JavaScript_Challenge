document.addEventListener("DOMContentLoaded", () => {
  const clearButton = document.getElementById("clearButton");
  const log = document.getElementById("log");

  const clearAllStorage = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  const verifyStorageCleared = () => {
    const localStorageEmpty = localStorage.length === 0;
    const sessionStorageEmpty = sessionStorage.length === 0;

    log.innerText += `LocalStorage is empty: ${localStorageEmpty}\n`;
    log.innerText += `SessionStorage is empty: ${sessionStorageEmpty}\n\n`;
  };

  clearButton.addEventListener("click", () => {
    clearAllStorage();
    verifyStorageCleared();
  });

  log.innerText += 'Click "Clear All Data" to clear storage and verify.\n';
});

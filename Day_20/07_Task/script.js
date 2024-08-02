document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("registrationForm");
  const displayUserInfo = document.getElementById("displayUserInfo");

  const saveUserInfo = (event) => {
    event.preventDefault();
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;

    const userInfo = {
      name: name,
      email: email,
    };

    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    displayUserInformation();
  };

  const displayUserInformation = () => {
    const savedUserInfo = sessionStorage.getItem("userInfo");

    if (savedUserInfo) {
      const userInfo = JSON.parse(savedUserInfo);
      displayUserInfo.innerHTML = `<p>Welcome, ${userInfo.name}!</p><p>Your email is ${userInfo.email}.</p>`;
    } else {
      displayUserInfo.innerHTML =
        "<p>No user information found. Please register.</p>";
    }
  };

  registrationForm.addEventListener("submit", saveUserInfo);

  displayUserInformation();
});

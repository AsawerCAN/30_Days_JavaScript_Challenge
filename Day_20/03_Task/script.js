document.addEventListener("DOMContentLoaded", () => {
  const userInfoForm = document.getElementById("userInfoForm");
  const displayUserInfo = document.getElementById("displayUserInfo");

  const saveUserInfo = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const userInfo = {
      name: name,
      email: email,
    };

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    displayUserInformation();
  };

  const displayUserInformation = () => {
    const savedUserInfo = localStorage.getItem("userInfo");

    if (savedUserInfo) {
      const userInfo = JSON.parse(savedUserInfo);
      displayUserInfo.innerText = `Welcome back, ${userInfo.name}! Your email is ${userInfo.email}.`;
    } else {
      displayUserInfo.innerText =
        "No user information found. Please enter your info above.";
    }
  };

  userInfoForm.addEventListener("submit", saveUserInfo);

  displayUserInformation();
});

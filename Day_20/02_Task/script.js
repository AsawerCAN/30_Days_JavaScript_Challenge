document.getElementById("saveButton").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  const age = document.getElementById("ageInput").value;
  const email = document.getElementById("emailInput").value;

  if (name && age && email) {
    const userProfile = {
      name: name,
      age: parseInt(age, 10),
      email: email,
    };

    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    alert("Profile saved!");
  } else {
    alert("Please fill out all fields before saving.");
  }
});

document.getElementById("retrieveButton").addEventListener("click", () => {
  const savedProfile = localStorage.getItem("userProfile");

  if (savedProfile) {
    const userProfile = JSON.parse(savedProfile);
    console.log(userProfile);
    document.getElementById(
      "displayProfile"
    ).innerText = `Name: ${userProfile.name}\nAge: ${userProfile.age}\nEmail: ${userProfile.email}`;
  } else {
    alert("No profile found. Please save a profile first.");
  }
});

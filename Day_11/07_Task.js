// Activity 4: Fetching Data from an API

// Task 7:
const fetchCatFact = async () => {
  const url = "https://meowfacts.herokuapp.com/";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`Cat Fact: ${data.data[0]}`);
  } catch (error) {
    console.error(`Error fetching cat fact: ${error.message}`);
  }
};

fetchCatFact();

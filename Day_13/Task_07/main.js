import axios from "axios";

const jokeUrl = "https://official-joke-api.appspot.com/random_joke";

async function getRandomJoke() {
  try {
    const response = await axios.get(jokeUrl);
    const joke = response.data;

    console.log(`Here's a joke for you: ${joke.setup} - ${joke.punchline}`);
  } catch (error) {
    console.error("Error fetching the joke:", error);
  }
}

getRandomJoke();

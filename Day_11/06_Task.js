// Activity 4: Fetching Data from an API

// Task 6:
const fetchTriviaQuestion = () => {
  return fetch("https://opentdb.com/api.php?amount=1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const question = data.results[0].question;
      const correctAnswer = data.results[0].correct_answer;
      console.log(`Trivia Question: ${question}`);
      console.log(`Correct Answer: ${correctAnswer}`);
    })
    .catch((error) => {
      console.error(`Error fetching trivia question: ${error.message}`);
    });
};

fetchTriviaQuestion();

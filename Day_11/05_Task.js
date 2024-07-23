// Activity 3: Using Async/Await

// Task 5:
const simulateDatabaseConnection = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Failed to connect to the database"));
    }, 2000);
  });
};

const connectToDatabase = async () => {
  try {
    console.log("Attempting to connect to the database...");
    await simulateDatabaseConnection();
    console.log("Connected to the database successfully.");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

connectToDatabase();

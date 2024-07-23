// Activity 5: Concurrent Promises

// Task 8:
const fetchRandomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      resolve(randomNumber);
    }, 1000);
  });
};

const fetchCurrentDate = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentDate = new Date().toLocaleDateString();
      resolve(currentDate);
    }, 1000);
  });
};

const fetchUserInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userInfo = { name: "John Doe", age: 30 };
      resolve(userInfo);
    }, 1000);
  });
};

const fetchAllData = async () => {
  try {
    const [randomNumber, currentDate, userInfo] = await Promise.all([
      fetchRandomNumber(),
      fetchCurrentDate(),
      fetchUserInfo(),
    ]);

    console.log(`Random Number: ${randomNumber}`);
    console.log(`Current Date: ${currentDate}`);
    console.log(`User Info: Name - ${userInfo.name}, Age - ${userInfo.age}`);
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
};

fetchAllData();

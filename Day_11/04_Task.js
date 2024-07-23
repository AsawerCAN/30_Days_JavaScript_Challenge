// Activity 3: Using Async/Await

// Task 4:
const fetchWeatherData = (city, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const weather = {
        city,
        temperature: Math.floor(Math.random() * 30) + 10,
        condition: "Sunny",
      };
      resolve(weather);
    }, delay);
  });
};

const logWeatherData = async (city) => {
  try {
    console.log(`Fetching weather data for ${city}...`);
    const weatherData = await fetchWeatherData(city, 2000);
    console.log(`Weather data for ${city}:`, weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

logWeatherData("New York");
logWeatherData("Los Angeles");
logWeatherData("Chicago");

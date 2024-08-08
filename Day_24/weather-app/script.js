const apiKey = "apikey here"; /* APi Key removed */
const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const weatherIconElement = document.getElementById("weatherIcon");
const forecastElement = document.getElementById("forecast");
const themeToggle = document.getElementById("themeToggle");

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const icon = themeToggle.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

// Fetch weather data
async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) throw new Error("City not found");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    alert("City not found. Please try again.");
  }
}

// Fetch 5-day forecast
async function fetchForecast(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) throw new Error("Forecast data not available");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

// Update weather information
function updateWeatherInfo(data) {
  locationElement.textContent = `${data.name}, ${data.sys.country}`;
  temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
  descriptionElement.textContent = data.weather[0].description;
  weatherIconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherIconElement.alt = data.weather[0].description;
  weatherIconElement.classList.remove("hidden"); // Show the icon
}

// Update forecast information
function updateForecastInfo(data) {
  forecastElement.innerHTML = "";
  const dailyData = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );
  dailyData.slice(0, 5).forEach((day) => {
    const date = new Date(day.dt * 1000);
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    const temp = Math.round(day.main.temp);
    const icon = day.weather[0].icon;

    const forecastItem = document.createElement("div");
    forecastItem.classList.add("forecast-item");
    forecastItem.innerHTML = `
            <p>${dayName}</p>
            <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${day.weather[0].description}">
            <p>${temp}°C</p>
        `;
    forecastElement.appendChild(forecastItem);
  });
}

// Search weather
async function searchWeather() {
  const city = locationInput.value.trim();
  if (city) {
    const weatherData = await fetchWeather(city);
    if (weatherData) {
      updateWeatherInfo(weatherData);
      const forecastData = await fetchForecast(city);
      if (forecastData) {
        updateForecastInfo(forecastData);
      }
    }
  } else {
    clearWeatherDisplay(); // Clear display if input is empty
  }
}

// Clear weather display
function clearWeatherDisplay() {
  locationElement.textContent = "";
  temperatureElement.textContent = "";
  descriptionElement.textContent = "";
  weatherIconElement.src = "";
  weatherIconElement.alt = "";
  weatherIconElement.classList.add("hidden"); // Hide the icon
  forecastElement.innerHTML = "";
}

// Event listeners
searchButton.addEventListener("click", searchWeather);
locationInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchWeather();
  }
});

// Initialize the app
function initApp() {
  clearWeatherDisplay();
  locationInput.value = "";
}

// Call initApp when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initApp);

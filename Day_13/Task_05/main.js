import * as weatherToolkit from "./weatherToolkit.js";

const currentWeather = weatherToolkit.WEATHER_TYPES.RAINY;

console.log(
  `Weather Description: ${weatherToolkit.getWeatherDescription(currentWeather)}`
);

console.log(
  `Weather Advice: ${weatherToolkit.getWeatherAdvice(currentWeather)}`
);

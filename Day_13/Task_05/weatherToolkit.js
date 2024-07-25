export const WEATHER_TYPES = {
  SUNNY: "Sunny",
  RAINY: "Rainy",
  CLOUDY: "Cloudy",
  SNOWY: "Snowy",
  WINDY: "Windy",
};

export function getWeatherDescription(weatherType) {
  switch (weatherType) {
    case WEATHER_TYPES.SUNNY:
      return "It is a bright and sunny day!";
    case WEATHER_TYPES.RAINY:
      return "It is raining. Don't forget your umbrella!";
    case WEATHER_TYPES.CLOUDY:
      return "It is cloudy. The sun might peek out later.";
    case WEATHER_TYPES.SNOWY:
      return "It is snowing. Time for a snowball fight!";
    case WEATHER_TYPES.WINDY:
      return "It is windy. Hold onto your hat!";
    default:
      return "Weather type unknown.";
  }
}

export function getWeatherAdvice(weatherType) {
  switch (weatherType) {
    case WEATHER_TYPES.SUNNY:
      return "Wear sunglasses and sunscreen.";
    case WEATHER_TYPES.RAINY:
      return "Carry an umbrella and wear waterproof clothes.";
    case WEATHER_TYPES.CLOUDY:
      return "A light jacket might be needed.";
    case WEATHER_TYPES.SNOWY:
      return "Dress warmly and be careful on the roads.";
    case WEATHER_TYPES.WINDY:
      return "Secure loose objects and dress warmly.";
    default:
      return "No specific advice available.";
  }
}

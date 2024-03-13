const cityInput = document.querySelector("#city");
const countryInput = document.querySelector("#country");
const checkButton = document.querySelector("#check");
const tempIcon = document.querySelector("#tempIcon");
const weatherCountry = document.querySelector("#weatherCountry");
const temperature = document.querySelector("#temperature");
const weatherCondition = document.querySelector("#weatherCondition");
const humidity = document.querySelector("#humidity");
const container = document.querySelector("#container");

const apiKey = "bd4ea33ecf905116d12af172e008dbae";

checkButton.addEventListener("click", async () => {
  try {
    const city = cityInput.value;
    const country = countryInput.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=en&units=metric&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    weatherCountry.textContent = `${data.name} / ${data.sys.country}`;
    temperature.innerHTML = `${data.main.temp}°<b>C</b>`;
    weatherCondition.textContent = `Weather: ${data.weather[0].main}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    // Set background image based on weather condition
    setBackground(data.weather[0].main);

    cityInput.value = "";
    countryInput.value = "";
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
});

function setBackground(weatherCondition) {
  let backgroundImageUrl;
  switch (weatherCondition.toLowerCase()) {
    case "clear":
      backgroundImageUrl = "https://source.unsplash.com/1600x900/?sunny";
      break;
    case "clouds":
      backgroundImageUrl = "https://source.unsplash.com/1600x900/?cloudy";
      break;
    case "rain":
      backgroundImageUrl = "https://source.unsplash.com/1600x900/?rain";
      break;
    case "thunderstorm":
      backgroundImageUrl = "https://source.unsplash.com/1600x900/?storm";
      break;
    case "snow":
      backgroundImageUrl = "https://source.unsplash.com/1600x900/?snow";
      break;
    default:
      backgroundImageUrl = "https://source.unsplash.com/1600x900/?weather";
  }
  container.style.backgroundImage = `url(${backgroundImageUrl})`;
}

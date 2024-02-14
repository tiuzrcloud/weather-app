const cityInput = document.querySelector("#city");
const countryInput = document.querySelector("#country");
const checkButton = document.querySelector("#check");
const tempIcon = document.querySelector("#tempIcon"); // Assuming you have this in your HTML
const weatherCountry = document.querySelector("#weatherCountry");
const temperature = document.querySelector("#temperature");

const apiKey = "bd4ea33ecf905116d12af172e008dbae"; // Store API key securely

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

    // ... Assuming you have weather icon logic in script.js, insert it here ...

    cityInput.value = "";
    countryInput.value = "";
  } catch (error) {
    console.error("Error fetching weather data:", error);
    // Handle errors gracefully, e.g., display an error message to the user
  }
});

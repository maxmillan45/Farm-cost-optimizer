const button = document.getElementById("learnMoreButton");

button.addEventListener("click", () => {
  window.location.href = "forcaster.html"; 
});



const APIkey = '5ba0a33daa717fc484cf26dc71a137b4';


// Function to fetch weather data for a specific city
async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('currentWeather').innerHTML = `<p class="text-red-500">${error.message}</p>`;
    }
}


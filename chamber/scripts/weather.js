const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastList = document.querySelector('#forecast-list');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.23&lon=-111.66&units=imperial&appid=ea7cf244392ce2499855dc41b44aa424';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.23&lon=-111.66&units=imperial&appid=ea7cf244392ce2499855dc41b44aa424';

async function apiFetch() {
    try {
        const weatherResponse = await fetch(url);
        if (weatherResponse.ok) {
            const data = await weatherResponse.json();
            console.log(data);
            displayResults(data);
        } else {
            throw new Error(await weatherResponse.text());
        }

        const forecastResponse = await fetch(forecastUrl);
        if (forecastResponse.ok) {
            const data = await forecastResponse.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw new Error(await forecastResponse.text());
        }

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
    forecastList.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const forecastData = data.list[i * 8]; // Each day is represented by 8 items, 1 every 3 hours

        const forecastItem = document.createElement('li');
        const date = new Date(forecastData.dt * 1000);
        const day = date.toLocaleString('en-us', { weekday: 'long' });
        const temp = forecastData.main.temp;
        const weatherIconUrl = `https://openweathermap.org/img/w/${forecastData.weather[0].icon}.png`;
        const description = forecastData.weather[0].description;

        forecastItem.innerHTML = `
            <p>${day}</strong>: ${temp}&deg;F</p>
            <img src="${weatherIconUrl}" alt="${description}" />
            <p>${description}</p>
        `;

        forecastList.appendChild(forecastItem);
    }
}
export async function apiFetch(url, details, image) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data, details, image);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


function displayResults(data, details, image) {
    const container = document.querySelector('#cards');
    const card = document.createElement("div");

    const cityImage = document.createElement('img');
    cityImage.src = image;
    cityImage.alt = `city image`;
    cityImage.width = 250;
    cityImage.loading = 'lazy';

    const tag = document.createElement("p");
    tag.innerHTML = `${details} <span>${data.main.temp}&deg;F</span>`;

    const wind = document.createElement("p");
    wind.innerHTML = `Wind Speed: ${data.wind.speed}`

    if (data.wind.speed > 10) {
        wind.setAttribute('class', "red");
    } else if (data.wind.speed > 5) {
        wind.setAttribute('class', "yellow");
    } else {
        wind.setAttribute('class', "green");
    }

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    img.setAttribute('src', iconsrc);
    img.setAttribute('alt', desc);
    img.classList.add("weather-icon")
    figure.appendChild(img)

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = desc;
    figure.appendChild(figcaption);


    card.appendChild(cityImage)
    card.appendChild(tag);
    card.appendChild(wind);
    card.appendChild(figure);

    container.appendChild(card);
  }
const vernonUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.15&lon=-112.40&units=imperial&appid=ea7cf244392ce2499855dc41b44aa424';
const deltaUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=39.35&lon=-112.57&units=imperial&appid=ea7cf244392ce2499855dc41b44aa424';
const wendoverUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.73&lon=-114.03&units=imperial&appid=ea7cf244392ce2499855dc41b44aa424';

async function apiFetch(url, details, image) {
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

const vernonDetails = "The temperature in Vernon, Utah is";
const vernonImg = "https://www.willhiteweb.com/utah/vernon_hills/vernon_hills_utah.jpg";

const deltaDetails = "The temperature in Delta, Utah is";
const deltaImg = "https://www.visitutah.com/azure/cmsroot/visitutah/media/site-assets/three-season-photography/northern-utah/northern%201/web2000_ericerlenbusch_delta20150526-img_2696_.jpg?w=400&h=275&mode=crop&quality=65";

const wendoverDetails = "The temperature in Wendover, Utah is";
const wendoverImg = "https://nebula.wsimg.com/6b6979640f3b8ebd78b746600cc42898?AccessKeyId=375AFBF6C60EB72AC94F&disposition=0&alloworigin=1";


apiFetch(vernonUrl, vernonDetails, vernonImg);
apiFetch(deltaUrl, deltaDetails, deltaImg);
apiFetch(wendoverUrl, wendoverDetails, wendoverImg);

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
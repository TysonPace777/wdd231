import { apiFetch } from './weather.js';

const vernonUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.15&lon=-112.40&units=imperial&appid=ea7cf244392ce2499855dc41b44aa424';
const deltaUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=39.35&lon=-112.57&units=imperial&appid=ea7cf244392ce2499855dc41b44aa424';
const wendoverUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.73&lon=-114.03&units=imperial&appid=ea7cf244392ce2499855dc41b44aa424';

const vernonDetails = "The temperature in Vernon, Utah is";
const vernonImg = "https://www.willhiteweb.com/utah/vernon_hills/vernon_hills_utah.jpg";

const deltaDetails = "The temperature in Delta, Utah is";
const deltaImg = "https://utahstories.com/wp-content/uploads/2013/11/delta-utah.png";

const wendoverDetails = "The temperature in Wendover, Utah is";
const wendoverImg = "https://nebula.wsimg.com/6b6979640f3b8ebd78b746600cc42898?AccessKeyId=375AFBF6C60EB72AC94F&disposition=0&alloworigin=1";

apiFetch(vernonUrl, vernonDetails, vernonImg);
apiFetch(deltaUrl, deltaDetails, deltaImg);
apiFetch(wendoverUrl, wendoverDetails, wendoverImg);
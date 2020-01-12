
const location = "Montevideo,uy";
const api_key= "5aa90f40f12b6ff7d877c0e62abcf35a";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


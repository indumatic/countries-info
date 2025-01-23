import axios from 'axios'
const getUrl = (latitude, longitude) => `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`

const getWeather = (country) => {
    const latitude = country.capitalInfo.latlng[0]
    const longitude = country.capitalInfo.latlng[1]
    return axios
            .get(getUrl(latitude,longitude))
            .then(response => response.data)
}

export default { getWeather }
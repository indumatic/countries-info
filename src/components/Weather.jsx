const Weather = ({country,weather}) => {

    if(!country || !weather) return null

    return (
        <>
            <h2>Weather in {country.capital}</h2>
            <div>temperature {weather.current.temperature_2m} {weather.current_units.temperature_2m}</div>
            <div>wind {weather.current.wind_speed_10m} {weather.current_units.wind_speed_10m}</div>
        </>
    )
}

export default Weather
import axios from "axios"
import { useState } from "react"

const Countryview = ({country}) => {
    const languages = ((Object.values(country.languages)).map(language =>
        <li key={language}>{language}</li>)
    )

    const [lat, lon] = country.capitalInfo.latlng
    const [temperature, setTemperature] = useState('')
    const [windSpeed, setWindSpeed] = useState('')
    const [weatherIcon, setWeatherIcon] = useState('')


    useState(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${"metric"}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                console.log(response.data)
                setTemperature(response.data.main.temp)
                setWindSpeed(response.data.wind.speed)
                setWeatherIcon(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
            })
    })

    return (
        <div>
            <h2>{country.name["official"]}</h2>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            <ul>{languages}</ul>
            <img src={country.flags.png}></img>
            <h3>Weather in {country.capital}</h3>
            <p>temperature {temperature} Celsius</p>
            <img src={weatherIcon}></img>
            <p>wind {windSpeed} m/s</p>
        </div>
    )
}

export default Countryview
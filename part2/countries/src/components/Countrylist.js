const Countrylist = ({displayedCountries}) => {
    if (displayedCountries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
    else if (displayedCountries.length != 1) {
        return (displayedCountries.map(country =>
            <div key={country.name["official"]}>{country.name["common"]}</div>
            )
        )
    } else {
        const [country] = displayedCountries
        const languages = ((Object.values(country.languages)).map(language =>
            <li key={language}>{language}</li>)
        )

        return (
            <div>
                <h2>{country.name["official"]}</h2>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <h3>languages:</h3>
                <ul>{languages}</ul>
                <img src={country.flags.png}></img>
            </div>
        )
    }
    
}

export default Countrylist
import Countryview from "./CountryView"
import Countryentry from "./CountryEntry"

const Countrylist = ({displayedCountries}) => {
    if (displayedCountries.length == 0) {
        return
    }
    else if (displayedCountries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
    else if (displayedCountries.length > 1) {
        return (displayedCountries.map(country =>
            <Countryentry country={country} key={country.name["official"]}/>
            )
        )
    } else {
        const [country] = displayedCountries

        return (
            <div>
                <Countryview country={country}/>
            </div>
        )
    }
    
}

export default Countrylist
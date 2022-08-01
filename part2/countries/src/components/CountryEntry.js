import { useState } from "react"
import Countryview from "./CountryView"

const Countryentry = ({country}) => {
    const [displayCountry, setDisplayCountry] = useState(false)

    const handleClick = () => {
        setDisplayCountry(true)
    }

    if (!displayCountry) {
        return (
            <div>
                <span>{country.name["official"]}</span> <input type="submit" value="show" onClick={handleClick}></input>
            </div>
        )
    }
    else {
        return (
            <Countryview country={country}/>
        )
    }

}

export default Countryentry
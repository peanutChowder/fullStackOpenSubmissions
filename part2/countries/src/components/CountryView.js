const Countryview = ({country}) => {
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

export default Countryview
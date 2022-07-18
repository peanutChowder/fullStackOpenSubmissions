import { useState, useEffect } from 'react'
import axios from 'axios'

import Searchbar from './components/Searchbar'
import Countrylist from './components/Countrylist'

const App = () => {
  const [searched, setSearched] = useState('')
  const [countryList, setCountryList] = useState([])

  const displayedCountries = searched === ""
    ? []
    : countryList.filter(country => country.name["common"].toLowerCase().includes(searched.toLowerCase()))
  
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountryList(response.data)
        console.log(response.data)
      })
  })

  return (
    <div>
      <Searchbar setSearched={setSearched}/>
      <Countrylist displayedCountries={displayedCountries}/>
    </div>
  )
}

export default App
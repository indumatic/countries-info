// services module
// 
import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import CountryView from './components/CountryView'
import CountryItem from './components/CountryItem'

function App() {
  const [filter, filterState] = useState('')
  const [countries, countriesState] = useState([])
  const [filteredCountries, filteredCountriesState] = useState([])
  const [shownCountry, shownCountryState] = useState(null)

  useEffect(() => {
    (() => {
      countriesService
        .getAll()
        .then(countries => countriesState(countries))
    })()
  }, [])

  useEffect(() => {
    (() => {
      filteredCountriesState(
        countries
          .filter(country => country
                              .name
                              .common
                              .toLowerCase()
                              .includes(filter))
      )
    })()
  },[filter])

  useEffect(() => {
    shownCountryState(
      filteredCountries.length === 1
      ? filteredCountries[0]
      : null)
  },[filteredCountries])

  const handleShow = (name) => {
    shownCountryState(filteredCountries
                        .find(country => country
                                          .name
                                          .common === name))
  }

  return (
    <>      
      <div>
        find countries
        <input value={filter} onChange={e => filterState(e.target.value)}/>
      </div>
      {filteredCountries.length > 10
        ? <div>Too many matches, specify another filter</div>
        : filteredCountries.length > 1
          ? <div>
            {filteredCountries.map(country => <CountryItem key={country.name.common} country={country} handleShow={() => handleShow(country.name.common)}/>)}
          </div>
          : null
      }
      <CountryView country={shownCountry}/>
    </>
  )
}

export default App

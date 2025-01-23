// services module
// 
import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import Country from './components/Country'

function App() {
  const [filter, filterState] = useState('')
  const [names, namesState] = useState([])
  const [countries, countriesState] = useState([])
  const [filteredCountries, filteredCountriesState] = useState([])

  console.log(filteredCountries)

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

  return (
    <>
      <div>
        <div>find countries</div>
        <input value={filter} onChange={e => filterState(e.target.value)}/>
      </div>
      {filteredCountries.length > 10
        ? <div>Too many matches, specify another filter</div>
        : filteredCountries.length === 1
          ? <Country country={filteredCountries[0]}/>
          : <div>
              {filteredCountries.map(country => <div key={country.name.common}>{country.name.common}</div>)}
            </div>
      }
    </>
  )
}

export default App

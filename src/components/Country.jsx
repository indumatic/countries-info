const Country = ({country}) => {
    const imgStyle = {
        width: '100px'
    }

    return (
        <>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h2>languages</h2>
            <ul>{
                Object.keys(country.languages)
                    .map(key => country.languages[key])
                    .map(language => <li>{language}</li>)
            
            }</ul>
            <img src={country.flags.svg} style={imgStyle}></img>
        </>
    )
}


export default Country
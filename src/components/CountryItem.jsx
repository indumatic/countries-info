const CountryItem = ({country,handleShow}) => <div>
        {country.name.common}<button onClick={handleShow}>show</button>
    </div>

export default CountryItem
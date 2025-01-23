import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'

const getAll = () => axios
                        .get(`${baseUrl}api/all`)
                        .then(response => response.data)

const getCountry = (name) => axios
                            .get(`${baseUrl}api/name/${name}`)
                            .then(response => response.data)

export default { getAll, getCountry }
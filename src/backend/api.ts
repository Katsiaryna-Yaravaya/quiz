import axios from 'axios'

export const getCountriesCapitals = async (name, capital) => {
  return await axios
    .get(`https://restcountries.eu/rest/v2/all?fields=${name};${capital};`)
    .then(resp => resp.data)
}

export const getCountriesFlags = async (name, flag) => {
  return await axios
    .get(`https://restcountries.eu/rest/v2/all?fields=${name};${flag};`)
    .then(resp => resp.data)
}

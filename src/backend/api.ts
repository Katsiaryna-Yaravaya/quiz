import axios from 'axios'

export const getCountriesCapitals = (name, capital) => {
  return axios
    .get(`https://restcountries.eu/rest/v2/all?fields=${name};${capital};`)
    .then(resp => resp.data)
}

export const getCountriesFlags = (name, flag) => {
  return axios
    .get(`https://restcountries.eu/rest/v2/all?fields=${name};${flag};`)
    .then(resp => resp.data)
}

import axios from 'axios'

export const getCountriesCapital = async (name, capital) => {
  return await axios
    .get(`https://restcountries.eu/rest/v2/all?fields=${name};${capital};`)
    .then(resp => resp.data)
}

export const getCountriesFlag = async (name, flag) => {
  return await axios
    .get(`https://restcountries.eu/rest/v2/all?fields=${name};${flag};`)
    .then(resp => resp.data)
}

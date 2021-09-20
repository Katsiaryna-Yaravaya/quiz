import axios from 'axios'

export const getCountryCapital = async (name, capital, numericCode) => {
  return await axios
    .get(
      `https://restcountries.eu/rest/v2/all?fields=${name};${capital};${numericCode};`
    )
    .then(resp => resp.data)
}

export const getCountryFlag = async (name, flag, numericCode) => {
  return await axios
    .get(
      `https://restcountries.eu/rest/v2/all?fields=${name};${flag};${numericCode};`
    )
    .then(resp => resp.data)
}

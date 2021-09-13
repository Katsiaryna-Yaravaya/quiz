import axios from "axios";

export const getCountry = async (name, capital, numericCode) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/all?fields=${name};${capital};${numericCode};`)
}
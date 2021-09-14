import axios from "axios";

export const getCountry = async (name, capital, numericCode) => {
    return await axios
        .get(`https://restcountries.eu/rest/v2/all?fields=${name};${capital};${numericCode};`)
        .then(resp => resp.data)
}
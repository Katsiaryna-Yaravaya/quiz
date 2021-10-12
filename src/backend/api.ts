import axios from "axios";

export const getCountriesCapitals = (name, capital) => {
  return axios
    .get(`https://restcountries.com/v2/all?fields=${name},${capital};`)
    .then((resp) => resp.data);
};

export const getCountriesFlags = (name, flag) => {
  return axios
    .get(`https://restcountries.com/v2/all?fields=${name},${flag};`)
    .then((resp) => resp.data);
};

export const logIn = (data) => {
  return axios.post(`http://localhost:3001/login`, data)
};

export const addNewUser = (data) => {
  return axios.post(`http://localhost:3001/add-user`, data)
};
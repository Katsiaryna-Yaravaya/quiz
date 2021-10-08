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

export const getUser = (email) => {
  return axios.get(`http://localhost:3001/users`).then((resp) => {
    return resp.data.find((item) => {
      return item.email === email ? resp.data : null;
    });
  });
};

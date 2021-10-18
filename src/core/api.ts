import axios from "axios";
import {saveCountries, saveCredentialUser} from "../redux/country/actions";
import {history} from "./common";
import {toast} from "react-toastify";
import {COUNTRY_QUIZ_ROUT, COUNTRY_ROUT, FLAG_ROUT, MAIN} from "../constants/routs.constants";

export const getCountriesCapitals = (name, capital) => dispatch => {
  axios.get(`https://restcountries.com/v2/all?fields=${name},${capital};`)
    .then((resp) => {
      dispatch(saveCountries(resp.data));
      history.push(COUNTRY_ROUT);
    });
};

export const getCountriesFlags = (name, flag) => dispatch => {
  axios.get(`https://restcountries.com/v2/all?fields=${name},${flag};`)
    .then((resp) => {
      dispatch(saveCountries(resp.data));
      history.push(FLAG_ROUT);
    });
};

export const logIn = (data) => dispatch => {
  axios.post(`http://localhost:3001/login`, data)
    .then(res => {
      dispatch(saveCredentialUser(res.data));
      history.push(COUNTRY_QUIZ_ROUT);
    })
    .catch(err => toast(err.response.data))
};

export const addNewUser = (data) => {
  axios.post(`http://localhost:3001/add-user`, data)
    .then(() => history.push(MAIN))
    .catch(err => toast(err.response.data))
};
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCountriesCapitals, getCountriesFlags } from "../../backend/api";
import { saveCountries } from "../../redux/country/actions";

import { COUNTRY_ROUT, FLAG_ROUT } from "../../constants/routs.constants";

import "./index.css";

const CountryQuiz = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const clickCountryHandler = (): void => {
    getCountriesCapitals("name", "capital").then((resp) => {
      dispatch(saveCountries(resp));
      history.push(COUNTRY_ROUT);
    });
  };

  const clickFlagHandler = (): void => {
    getCountriesFlags("name", "flag").then((resp) => {
      dispatch(saveCountries(resp));
      history.push(FLAG_ROUT);
    });
  };

  return (
    <div className="main__chooseAQuiz">
      <button onClick={clickCountryHandler} className="chooseAQuiz__button">country</button>
      <button onClick={clickFlagHandler} className="chooseAQuiz__button">flag</button>
    </div>
  );
};

export default CountryQuiz

import { FC } from "react";
import { useDispatch } from "react-redux";

import { getCountriesCapitals, getCountriesFlags } from "../../core/api";

import "./index.css";

const CountryQuiz: FC = () => {
  const dispatch = useDispatch();

  const clickCountryHandler = (): void => { dispatch(getCountriesCapitals("name", "capital")); };

  const clickFlagHandler = (): void => { dispatch(getCountriesFlags("name", "flag")); };

  return (
    <div className="main__chooseAQuiz">
      <button onClick={clickCountryHandler} className="chooseAQuiz__button">capital</button>
      <button onClick={clickFlagHandler} className="chooseAQuiz__button">flag</button>
    </div>
  );
};

export default CountryQuiz;

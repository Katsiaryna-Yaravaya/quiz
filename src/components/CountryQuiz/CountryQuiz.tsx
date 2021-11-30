import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { getCountriesCapitals, getCountriesFlags } from "../../core/api";

import { Header } from "../index";

import "./index.css";

const CountryQuiz: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const clickCountryHandler = (): void => { dispatch(getCountriesCapitals("name", "capital")); };

  const clickFlagHandler = (): void => { dispatch(getCountriesFlags("name", "flag")); };

  return (
    <>
      <Header />
      <div className="main__chooseAQuiz">
        <button onClick={clickCountryHandler} className="chooseAQuiz__button">{t("capital")}</button>
        <button onClick={clickFlagHandler} className="chooseAQuiz__button">{t("flag")}</button>
      </div>
    </>
  );
};

export default CountryQuiz;

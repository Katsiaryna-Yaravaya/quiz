import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { MenuItem, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { deleteUserInformation } from "../../redux/country/actions";

import { MAIN, USER_PROFILE } from "../../constants/routs.constants";

import "./index.css";

const useStyles = makeStyles({
  selectStyle: {
    width: "130px",
    color: "black",
    fontSize: "14px !important",
    background: "white",
    borderRadius: "4px",
  },
});

const languages = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "ru",
    label: "Russian",
  },
];

const Header: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { t } = useTranslation();
  let initialState: string;

  if (i18next.language === "ru") {
    initialState = "ru";
  } else initialState = "en";

  const [language, setLanguage] = useState(`${initialState}`);

  const handleLanguageChange = (lang) => i18next.changeLanguage(lang);

  const handleClickLogout = () => {
    dispatch(deleteUserInformation());
    history.push(MAIN);
  };

  const handleChange = (event) => {
    handleLanguageChange(event.target.value);
    setLanguage(event.target.value);
  };

  return (
    <nav className="header">
      <div className="header__nav">
        <button onClick={handleClickLogout} className="header__button">{t("logout")}</button>

        <TextField
          id="select-language"
          select
          value={language}
          onChange={handleChange}
          className={classes.selectStyle}
        >
          {languages.map((language) => (
            <MenuItem key={language.value} className={classes.selectStyle} value={language.value}>
              {language.label}
            </MenuItem>
          ))}
        </TextField>

        <button onClick={() => history.push(USER_PROFILE)} className="header__button profile">{t("profile")}</button>
      </div>
    </nav>
  );
};

export default Header;

//
// import { FC, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";
//
// import { deleteUserInformation } from "../../redux/country/actions";
//
// import { MAIN, USER_PROFILE } from "../../constants/routs.constants";
// import { languageConstants } from "../../constants/language";
//
// import "./index.css";
//
// const Header: FC = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const [isOpenButton, setIsOpenButton] = useState<boolean>(false);
//
//   const { EN, RU } = languageConstants;
//   const { t } = useTranslation();
//
//   const handleClickLogout = () => {
//     dispatch(deleteUserInformation());
//     history.push(MAIN);
//   };
//
//   const handleClickButton = () => setIsOpenButton((change) => !change);
//
//   const handleLanguageChange = (lang) => i18next.changeLanguage(lang);
//
//   return (
//     <nav className="header">
//       <div className="header__nav">
//         <button onClick={handleClickLogout} className="header__button">{t("logout")}</button>
//
//         <div className="header__dropdown" onClick={handleClickButton}>
//           <button className="header__dropdown-button">{t("language")}</button>
//           {
//             isOpenButton && (
//               <>
//                 <button className="header__language-button" onClick={() => handleLanguageChange(EN)}>english</button>
//                 <button className="header__language-button" onClick={() => handleLanguageChange(RU)}>русский</button>
//               </>
//             )
//           }
//         </div>
//
//         <button onClick={() => history.push(USER_PROFILE)} className="header__button profile">{t("profile")}</button>
//       </div>
//     </nav>
//   );
// };
//

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { RootState } from "../../redux/root-reducer";

import { COUNTRY_QUIZ_ROUT, USER_PROFILE_EDIT } from "../../constants/routs.constants";

import { profilePhoto } from "../../asserts/imgIcon";

import "./index.css";

const Profile = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const { credentialUser } = useSelector((state: RootState) => state.data);
  const { img } = credentialUser[0];

  // Todo convert the object to an array of objects with a pair (key: value)
  const result = Object.entries(credentialUser[0]).map((entry) => ({ [entry[0]]: entry[1] }));

  return (
    <form className="quiz-form">
      <div className="img__block">
        <img className="img__profile" src={!img ? profilePhoto : img} alt="img" />
      </div>

      <ul className="user__list">
        {result.map((item, idx) => {
          if (item.name || item.surname || item.age || item.email) {
            return (
              <li key={idx} className="user__item">
                <p className="user__name-item">
                  {Object.keys(item)}
                  :
                </p>
                {item.name || item.surname || item.age || item.email}
              </li>
            );
          }
        })}
      </ul>

      <button className="form__edit-button" onClick={() => history.push(COUNTRY_QUIZ_ROUT)}>back</button>
      <button className="form__edit-button" onClick={() => history.push(USER_PROFILE_EDIT)}>edit</button>
    </form>
  );
};

export default Profile;

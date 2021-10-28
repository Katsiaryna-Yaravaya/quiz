import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { RootState } from "../../redux/root-reducer";

import { deleteResultUserQuestionDataAnswer, saveResultUserQuestionDataAnswer } from "../../redux/country/actions";
import { GAME_RESULT, RESULTS_USERS } from "../../constants/routs.constants";
import { QuestionDataAnswer } from "../../interface/questionDataAnswer.interface";

import "./index.css";

const GamesUser:FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userGames } = useSelector((state: RootState) => state.data);

  const handleListClick = (game: QuestionDataAnswer[], index: number): void => {
    dispatch(saveResultUserQuestionDataAnswer(game));
    // const currentPath = history.location.pathname;

    history.push(GAME_RESULT);
  };
  const handleClick = (): void => {
    dispatch(deleteResultUserQuestionDataAnswer());
    history.push(RESULTS_USERS);
  };

  return (
    <>
      <div className="back">
        <button className="back__button" onClick={handleClick}>back</button>
      </div>
      <ul className="games_list">
        {userGames.map((item: QuestionDataAnswer[], idx) => (
          <li className="game" key={idx} onClick={() => handleListClick(item, idx)}>
            game №
            {idx + 1}
          </li>
        ))}
      </ul>
    </>
  );
};
export default GamesUser;

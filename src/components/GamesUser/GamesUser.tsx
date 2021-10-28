import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useHistory, useParams } from "react-router-dom";

import { RootState } from "../../redux/root-reducer";

import { deleteResultUserQuestionDataAnswer, saveResultUserQuestionDataAnswer } from "../../redux/country/actions";
import { GAME_RESULT, RESULTS_USERS } from "../../constants/routs.constants";
import { QuestionDataAnswer } from "../../interface/questionDataAnswer.interface";

import "./index.css";

const GamesUser:FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userGames } = useSelector((state: RootState) => state.data);
  const { id } = useParams();

  const handleListClick = (game: QuestionDataAnswer[], idx: number): void => {
    dispatch(saveResultUserQuestionDataAnswer(game));
    history.push(generatePath(GAME_RESULT, { id, idx }));
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
          <li className="game" key={idx} onClick={() => handleListClick(item, idx + 1)}>
            game №
            {idx + 1}
          </li>
        ))}
      </ul>
    </>
  );
};
export default GamesUser;

import { FC, useEffect, useState } from "react";
import { generatePath, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { saveUserGames } from "../../redux/country/actions";

import { getAllUser } from "../../core/api";

import { MAIN, USER_GAMES } from "../../constants/routs.constants";
import { ShowResultUser } from "../../interface/showResultUser";
import { GENERATE_NUMBER_INDEX_QUESTION_COUNTRY } from "../../constants/general.constants";
import { QuestionDataAnswer } from "../../interface/questionDataAnswer.interface";

import "./index.css";

const ShowResultsUsers: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState<ShowResultUser[]>([]);

  useEffect(() => {
    getAllUser().then((data) => setData(data.data));
  }, []);

  const getHighersScore = (userGames: QuestionDataAnswer[][]): number => {
    let result: number = 0;
    userGames.forEach((item:QuestionDataAnswer[]) => {
      result = Math.max(item.length, result);
    });
    if (result < GENERATE_NUMBER_INDEX_QUESTION_COUNTRY && result) {
      return result - 1;
    }
    if (result === GENERATE_NUMBER_INDEX_QUESTION_COUNTRY) {
      return result;
    }
    return result;
  };

  const handleClick = (userGames: QuestionDataAnswer[][], id: number): void => {
    if (!userGames.length) {
      toast("user has not played yet");
    }
    if (userGames.length) {
      dispatch(saveUserGames(userGames));
      history.push(generatePath(USER_GAMES, { id }));
    }
  };

  return (
    <>
      <div className="back">
        <button className="back__button" onClick={() => history.push(MAIN)}>back</button>
      </div>
      <table className="table">
        <tbody>
        <tr className="table__row">
          <td>user name</td>
          <td>best result</td>
          <td>number of games</td>
        </tr>
        {!!data && data.map((item: ShowResultUser, idx: number) => (
          <tr className="table__row" key={idx}>
            <td><span className="table__link" onClick={() => handleClick(item.userGames, item.id)}>{item.name}</span></td>
            <td>{getHighersScore(item.userGames)}</td>
            <td>{item.userGames.length}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
};

export default ShowResultsUsers;

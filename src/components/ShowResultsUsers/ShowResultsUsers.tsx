import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { getAllUser } from "../../core/api";

import { MAIN } from "../../constants/routs.constants";
import { ShowResultUser } from "../../interface/showResultUser";

import "./index.css";
import { QuestionDataAnswer } from "../../interface/questionDataAnswer.interface";

const ShowResultsUsers: FC = () => {
  const history = useHistory();
  const [data, setData] = useState<ShowResultUser[]>([]);

  useEffect(() => {
    getAllUser().then((data) => setData(data.data));
  }, []);
  // if (data.length) {
  //   const a = data[0].userGames[1].length;
  //   console.log(a);
  // }
  // map((item) =>
  // console.log(item.userGames[1].length);
  // item.userGames[0].length);
  //
  // const b = a.map((item) => item);
  // .sort((a, b) => b - a);

  const getHighersScore = (userGames: any[]) => {
    let result = 0;
    userGames.forEach((item: any[]) => {
      result = Math.max(item.length, result);
    });
    return result;
  };

  return (
    <>
      <div className="back">
        <button className="back__button" onClick={() => history.push(MAIN)}>back</button>
      </div>
      <table className="table">
        <tbody className="table__body">
        <tr className="table__row">
          <td>user name</td>
          <td>best result</td>
          <td>number of games</td>
        </tr>
        {!!data && data.map((item: ShowResultUser, idx: number) => (
          <tr className="table__row" key={idx}>
            <td>{item.name}</td>
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

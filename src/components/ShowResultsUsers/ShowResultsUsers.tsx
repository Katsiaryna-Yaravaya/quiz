import {
  FC, useEffect, useMemo, useState,
} from "react";
import { useHistory } from "react-router-dom";

import { getAllUser } from "../../core/api";
import { Table } from "../index";

import { MAIN } from "../../constants/routs.constants";
import { ShowResultUser } from "../../interface/showResultUser";
import { GENERATE_NUMBER_INDEX_QUESTION_COUNTRY } from "../../constants/general.constants";
import { QuestionDataAnswer } from "../../interface/questionDataAnswer.interface";

import "./index.css";

const ShowResultsUsers: FC = () => {
  const history = useHistory();
  const [data, setData] = useState<ShowResultUser[]>([]);

  useEffect(() => {
    getAllUser().then((dataServer) => setData(dataServer.data));
  }, []);

  const getHighersScore = (userData: ShowResultUser): number => {
    let result: number = 0;
    if (userData.userGames.length) {
      userData.userGames.forEach((item: QuestionDataAnswer[]) => {
        result = Math.max(item.length, result);
      });
    }
    if (result < GENERATE_NUMBER_INDEX_QUESTION_COUNTRY && result) {
      return result - 1;
    }
    if (result === GENERATE_NUMBER_INDEX_QUESTION_COUNTRY) {
      return result;
    }
    return result;
  };

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Best result",
        accessor: getHighersScore,
      },
      {
        Header: "Number of games",
        accessor: "userGames.length",
      },
    ],
    [],
  );

  return (
    <>
      <div className="back">
        <button className="back__button" onClick={() => history.push(MAIN)}>back</button>
      </div>

      <Table columns={columns} data={data} />
    </>
  );
};

export default ShowResultsUsers;

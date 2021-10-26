import { FC, useEffect, useState } from "react";

import { getAllUser } from "../../core/api";

import { ShowResultUser } from "../../interface/showResultUser";

import "./index.css";

const ShowResultsUsers: FC = () => {
  const [data, setData] = useState<ShowResultUser[]>([]);

  useEffect(() => {
    getAllUser().then((data) => setData(data.data));
  }, []);

  return (
    <table className="table">
      <tbody className="table__body">
      <tr className="table__row">
        <td>user name</td>
        <td>best result</td>
        <td>number of games</td>
      </tr>
      {!!data && data.map((item, idx) => (
        <tr className="table__row" key={idx}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.userGames.length}</td>
        </tr>
      ))}

      </tbody>
    </table>
  );
};

export default ShowResultsUsers;

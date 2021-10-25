import { FC } from "react";
import "./index.css";

const ShowResultsUsers: FC = () => (
  <table className="table">
    <tbody className="table__body">
      <tr className="table__row">
        <td>user name</td>
        <td>best result</td>
        <td>number of games</td>
      </tr>
      <tr className="table__row" />
    </tbody>
  </table>
);

export default ShowResultsUsers;

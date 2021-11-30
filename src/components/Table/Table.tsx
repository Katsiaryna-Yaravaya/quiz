import { useTable } from "react-table";
import { generatePath, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { saveUserGames } from "../../redux/country/actions";

import { QuestionDataAnswer } from "../../interface/questionDataAnswer.interface";
import { USER_GAMES } from "../../constants/routs.constants";

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  const history = useHistory();
  const dispatch = useDispatch();

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
    <table {...getTableProps()} className="table">
      <thead>
      {headerGroups.map((headerGroup, idx) => (
        <tr className="table__row" key={idx} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th className="table__header" key={idx} {...column.getHeaderProps()}>{column.render("Header")}</th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);
        return (
          <tr className="table__row" key={i} {...row.getRowProps()}>
            {row.cells.map((cell) => {
              if (cell.column.Header === "Name") {
                return <td key={i} {...cell.getCellProps()}><span className="table__link" onClick={() => handleClick(cell.row.original.userGames, cell.row.original.id)}>{cell.render("Cell")}</span></td>;
              }
              return <td key={i} {...cell.getCellProps()}>{cell.render("Cell")}</td>;
            })}
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

export default Table;

import { useTable, useSortBy, useRowSelect } from "react-table";
import { IndeterminateCheckbox } from "../index";

const Table = ({ columns, data, changeSelectedRows }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable({
    columns,
    data,
  },
  useSortBy,
  useRowSelect,
  (hooks) => {
    hooks.visibleColumns.push((columns) => [
      {
        id: "selection",
        Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
        ),
        Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
        ),
      },
      ...columns,
    ]);
  });

  changeSelectedRows(selectedFlatRows);

  return (
      <table {...getTableProps()} className="table">
      <thead>
      {headerGroups.map((headerGroup, idx) => (
        <tr className="table__row" key={idx} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th className="table__header" key={idx} {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render("Header")}
                <span>
                   {column.isSorted
                     ? column.isSortedDesc
                       ? " 🔽"
                       : " 🔼"
                     : ""}
                </span>
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);
        return (
          <tr className="table__row" key={i} {...row.getRowProps()}>
            {row.cells.map((cell) => <td key={i} {...cell.getCellProps()}>{cell.render("Cell")}</td>)}
          </tr>
        );
      })}
      </tbody>
      </table>
  );
};

export default Table;

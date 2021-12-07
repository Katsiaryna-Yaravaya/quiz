import {
  FC, useEffect, useMemo, useRef, useState,
} from "react";
import { generatePath, useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Table } from "../index";
import { RootState } from "../../redux/root-reducer";

import { getAlLUsers } from "./effects";

import { MAIN, USER_GAMES } from "../../constants/routs.constants";
import { ShowResultUser } from "../../interface/showResultUser";
import { getHighersScore } from "../../core/utils";
import { QuestionDataAnswer } from "../../interface/questionDataAnswer.interface";
import {
  deleteUsers, saveUserGames, updateUserName,
} from "../../redux/country/actions";

import "./index.css";

const ShowResultsUsers: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.data);
  const deleteIds = useRef<number[] >([]);
  const [data, setData] = useState<ShowResultUser[]>([]);
  const [isVisibleButtonDelete, setIsVisibleButtonDelete] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getAlLUsers());
  }, []);

  useEffect(() => {
    setData(users);
  }, [users]);

  const handleClick = (userGames: QuestionDataAnswer[][], id: number): void => {
    if (!userGames.length) {
      toast("user has not played yet");
    }
    if (userGames.length) {
      dispatch(saveUserGames(userGames));
      history.push(generatePath(USER_GAMES, { id }));
    }
  };

  const changeSelectedRows = (selected) => {
    if (selected.length) {
      deleteIds.current = selected.map((item) => item.original.id);
      setIsVisibleButtonDelete(true);
    } else setIsVisibleButtonDelete(false);
  };

  const handleClickDelete = () => {
    dispatch(deleteUsers(deleteIds.current));
  };

  const handle = (data, row) => {
    dispatch(updateUserName({ name: data.name, email: row.email }));
  };

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ row }) =>
          (<span className="table__link" onClick={() => handleClick(row.original.userGames, row.original.id)}>{row.original.name}</span>),
      },
      {
        Header: "Best result",
        accessor: getHighersScore,
      },
      {
        Header: "Number of games",
        accessor: "userGames.length",
      },
      {
        Header: "DropDown",
        accessor: "...",
        Cell: ({ row }) => (
          <Dropdown rowSelected={row} dataUser={handle} />
        ),
      },
    ],
    [],
  );

  return (
    <>
      <div className="back">
        <button className="back__button" onClick={() => history.push(MAIN)}>back</button>
      </div>

      <Table columns={columns} data={data} changeSelectedRows={changeSelectedRows} />

      {isVisibleButtonDelete && <button className="button-delete" onClick={handleClickDelete}>delete</button>}
    </>
  );
};

export default ShowResultsUsers;

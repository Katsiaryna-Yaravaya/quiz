import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isMultiPlayer } from "../../redux/country/actions";
import { MAIN } from "../../constants/routs.constants";
import "./index.css";

const MainGame = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push(MAIN);
    dispatch(isMultiPlayer(true));
  };

  return (
    <div className="main-game">
      <h1 className="title">Welcome to the game</h1>
      <p className="text">number of players:</p>
      <div>
        <button onClick={() => history.push(MAIN)} className="one-player player">1</button>
        <button onClick={handleClick} className="two-players player">2</button>
      </div>
    </div>
  );
};

export default MainGame;

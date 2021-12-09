import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { usersId, getStateData } from "../../redux/country/selectors";

import { updateUser } from "../../core/api";

import { RESULTS } from "../../constants/routs.constants";
import { saveCounter } from "../../redux/country/actions";

import "./index.css";

interface Props {
  resetQuestionState: () => void;
  id: number | null;
  selectedId: () => void;
}

const Next: FC<Props> = ({ resetQuestionState, selectedId, id }) => {
  const {
    countriesUserQuestions, questionCounter, questionsResult, credentialUser, isTwoPlayers,
  } = useSelector(getStateData);
  const ids = useSelector(usersId);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleNextQuestionButton = (): void => {
    if (countriesUserQuestions[id] && questionCounter < countriesUserQuestions[id].length) {
      resetQuestionState();
      selectedId(id);
      if (isTwoPlayers) {
        if (id === ids[1]) {
          dispatch(saveCounter(questionCounter + 1));
        }
      } else {
        dispatch(saveCounter(questionCounter + 1));
      }
    } else {
      credentialUser.map((item) => updateUser(item.email, questionsResult));
      history.push(RESULTS);
    }
  };

  return (
    <div className="next">
      <button onClick={handleNextQuestionButton} type="button" className="next__button">
        Next
      </button>
    </div>
  );
};

export default Next;

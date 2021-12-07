import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { RootState } from "../../redux/root-reducer";

import { updateUser } from "../../core/api";

import { RESULTS } from "../../constants/routs.constants";
import { saveCounter } from "../../redux/country/actions";

import "./index.css";

interface Props {
  resetQuestionState: () => void;
}

const Next: FC<Props> = ({ resetQuestionState }) => {
  const {
    countriesUserQuestions,
    questionCounter,
    questionsResult,
    credentialUser,
  } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleNextQuestionButton = (): void => {
    if (countriesUserQuestions && questionCounter < countriesUserQuestions.length) {
      resetQuestionState();
      dispatch(saveCounter(questionCounter + 1));
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

import { useDispatch, useSelector } from "react-redux";
import { FC } from "react";
import { RootState } from "../../redux/root-reducer";

import { saveCounter } from "../../redux/country/actions";

import "./index.css";
import { updateUser } from "../../core/api";

interface Props {
  resetQuestionState: () => void;
}

const Next: FC<Props> = ({ resetQuestionState }) => {
  const {
    countriesUserQuestions,
    counter,
    questionsResult,
    credentialUser: { email },
  } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  const handleNextQuestionButton = (): void => {
    if (countriesUserQuestions && counter < countriesUserQuestions.length) {
      resetQuestionState();
      dispatch(saveCounter(counter + 1));
    } else {
      updateUser(email, questionsResult);
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

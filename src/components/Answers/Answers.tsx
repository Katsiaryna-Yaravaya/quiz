import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { RootState } from "../../redux/root-reducer";

import { saveQuestionDataAnswer } from "../../redux/country/actions";
import { AnswerItem, Next } from "../index";

import { AnswerEnumState } from "../../enum/AnswerState.enum";
import { RESULTS } from "../../constants/routs.constants";
import { updateUser } from "../../core/api";
import { usersId, getStateData } from "../../redux/country/selectors";

interface Props {
  id: number | null;
  selectedId: () => void;
}

const Answers: FC<Props> = ({ id, selectedId }) => {
  const {
    currentQuestion,
    credentialUser,
    questionsResult,
  } = useSelector(getStateData);
  const history = useHistory();
  const dispatch = useDispatch();
  const [isNextButtonVisible, setIsNextButtonVisible] = useState<boolean>(false);
  const [isSelectedAnswer, setIsSelectedAnswer] = useState<boolean>(false);
  const [answerStyleStateValue, setAnswerStyleStateValue] = useState<AnswerEnumState[]>([]);

  useEffect(() => {
    currentQuestion[id]?.allAnswers && setAnswerStyleStateValue(Array(currentQuestion[id]?.allAnswers.length).fill(AnswerEnumState.DEFAULT, 0, currentQuestion[id]?.allAnswers.length));
  }, [currentQuestion[id]?.allAnswers]);

  const resetQuestionState = (): void => {
    setIsSelectedAnswer(false);
    setIsNextButtonVisible(false);
  };

  const saveCard = (resultState: AnswerEnumState[]): void => {
    saveReduxQuestionDataAnswer({
      answerState: resultState,
      currentQuestion: currentQuestion[id],
    });
  };

  const saveReduxQuestionDataAnswer = (dataAnswer): void => {
    dispatch(saveQuestionDataAnswer(dataAnswer));
  };

  const defineAnswersState = (answer: string): AnswerEnumState[] => {
    const resultState: AnswerEnumState[] = [];

    currentQuestion[id].allAnswers?.forEach((answerItem: string) => {
      const currentAnswerState: AnswerEnumState = answerItem === currentQuestion[id].correctAnswer
        ? AnswerEnumState.CORRECT
        : answerItem === answer && answer !== currentQuestion[id].correctAnswer
          ? AnswerEnumState.INCORRECT
          : AnswerEnumState.DISABLED;

      resultState.push(currentAnswerState);

      if (currentAnswerState === AnswerEnumState.CORRECT && answer === currentQuestion[id].correctAnswer) {
        setIsNextButtonVisible(true);
      }

      if (currentAnswerState === AnswerEnumState.INCORRECT) {
        setTimeout(() => history.push(RESULTS), 2000);
      }
    });
    return resultState;
  };

  const handleAnswerClick = (answer: string): void => {
    if (isSelectedAnswer) {
      return;
    }
    setIsSelectedAnswer(true);

    const newAnswersState: AnswerEnumState[] = defineAnswersState(answer);

    if (newAnswersState.includes(AnswerEnumState.INCORRECT)) {
      credentialUser.map((user) => {
        updateUser(user.email, [
          ...questionsResult,
          {
            answerState: newAnswersState,
            currentQuestion: currentQuestion[id],
          },
        ]);
      });
    }

    setAnswerStyleStateValue(newAnswersState);
    saveCard(newAnswersState);
  };

  return (
        <>
            {!!currentQuestion[id]?.allAnswers && currentQuestion[id]?.allAnswers.map((answer: string, idx: number) => (
                <AnswerItem
                  key={idx}
                  numeric={idx + 1}
                  answer={answer}
                  answerStyleStateValue={answerStyleStateValue[idx]}
                  answerClick={() => handleAnswerClick(answer)}
                />
            ))}

            {isNextButtonVisible ? (<Next id={id} selectedId={selectedId} resetQuestionState={resetQuestionState} />) : null}
        </>
  );
};

export default Answers;

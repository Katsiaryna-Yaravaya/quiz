import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { RootState } from "../../redux/root-reducer";

import { saveQuestionDataAnswer } from "../../redux/country/actions";
import { AnswerItem, Next } from "../index";

import { AnswerEnumState } from "../../enum/AnswerState.enum";
import { RESULTS } from "../../constants/routs.constants";
import { updateUser } from "../../core/api";

const Answers: FC = () => {
  const {
    currentQuestion: {
      allAnswers, correctAnswer, capital, flag,
    },
    credentialUser: { email },
    questionsResult,
  } = useSelector((state: RootState) => state.data);
  const history = useHistory();
  const dispatch = useDispatch();
  const [isNextButtonVisible, setIsNextButtonVisible] = useState<boolean>(false);
  const [isSelectedAnswer, setIsSelectedAnswer] = useState<boolean>(false);
  const [answerStyleStateValue, setAnswerStyleStateValue] = useState<AnswerEnumState[]>([]);

  useEffect(() => {
    allAnswers && setAnswerStyleStateValue(Array(allAnswers.length).fill(AnswerEnumState.DEFAULT, 0, allAnswers.length));
  }, [allAnswers]);

  // useEffect(() => {
  //   updateUser(email, questionsResult);
  //   console.log(questionsResult);
  // }, [questionsResult]);

  const resetQuestionState = (): void => {
    setIsSelectedAnswer(false);
    setIsNextButtonVisible(false);
  };

  const saveCard = (resultState): void => {
    saveReduxQuestionDataAnswer({
      choseByUser: resultState,
      currentQuestion: {
        allAnswers, correctAnswer, capital, flag,
      },
    });
  };

  const saveReduxQuestionDataAnswer = (dataAnswer) => {
    dispatch(saveQuestionDataAnswer(dataAnswer));
  };

  const defineAnswersState = (answer): AnswerEnumState[] => {
    const resultState: AnswerEnumState[] = [];

    allAnswers?.forEach((answerItem: string) => {
      const currentAnswerState: AnswerEnumState = answerItem === correctAnswer
        ? AnswerEnumState.CORRECT
        : answerItem === answer && answer !== correctAnswer
          ? AnswerEnumState.INCORRECT
          : AnswerEnumState.DISABLED;

      resultState.push(currentAnswerState);

      if (currentAnswerState === AnswerEnumState.CORRECT && answer === correctAnswer) {
        setIsNextButtonVisible(true);
      }

      if (currentAnswerState === AnswerEnumState.INCORRECT) {
        setTimeout(() => history.push(RESULTS), 2000);
      }
    });
    return resultState;
  };

  const handleAnswerClick = (answer): void => {
    if (isSelectedAnswer) {
      return;
    }
    setIsSelectedAnswer(true);

    const newAnswersState: AnswerEnumState[] = defineAnswersState(answer);

    if (newAnswersState.includes(AnswerEnumState.INCORRECT)) {
      updateUser(email, [
        ...questionsResult,
        {
          choseByUser: newAnswersState,
          currentQuestion: {
            allAnswers, correctAnswer, capital, flag,
          },
        },
      ]);
    }

    setAnswerStyleStateValue(newAnswersState);
    saveCard(newAnswersState);
  };

  return (
        <>
            {!!allAnswers && allAnswers.map((answer, idx) => (
                <AnswerItem
                  key={idx}
                  numeric={idx + 1}
                  answer={answer}
                  answerStyleStateValue={answerStyleStateValue[idx]}
                  answerClick={() => handleAnswerClick(answer)}
                />
            ))}

            {isNextButtonVisible ? (<Next resetQuestionState={resetQuestionState} />) : null}
        </>
  );
};

export default Answers;

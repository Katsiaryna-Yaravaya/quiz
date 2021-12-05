import { Countries } from "../interface/countries.interface";
import { ShowResultUser } from "../interface/showResultUser";
import { QuestionDataAnswer } from "../interface/questionDataAnswer.interface";
import { GENERATE_NUMBER_INDEX_QUESTION_COUNTRY } from "../constants/general.constants";

export const generateIndexCountry = (arrayFindDataObject, num: number, correctAnswerName?: string): Countries[] => {
  const uniqueNumber: number[] = [];

  while (uniqueNumber.length < num) {
    const generateNumber: number = Math.floor(Math.random() * 249) + 1;

    if (
      !uniqueNumber.includes(generateNumber)
      && arrayFindDataObject[generateNumber - 1]?.name !== correctAnswerName
      && (arrayFindDataObject[generateNumber - 1]?.capital || arrayFindDataObject[generateNumber - 1]?.flag)
    ) {
      uniqueNumber.push(generateNumber);
    }
  }

  if (arrayFindDataObject.length) {
    return uniqueNumber.map((item) => arrayFindDataObject.find((country, idx) => {
      if (item === idx + 1) {
        return country;
      }
    }));
  }
  return [];
};

export const getHighersScore = (userData: ShowResultUser): number => {
  let result: number = 0;
  if (userData.userGames.length) {
    userData.userGames.forEach((item: QuestionDataAnswer[]) => {
      result = Math.max(item.length, result);
    });
  }
  if (result < GENERATE_NUMBER_INDEX_QUESTION_COUNTRY && result) {
    return result - 1;
  }
  if (result === GENERATE_NUMBER_INDEX_QUESTION_COUNTRY) {
    return result;
  }
  return result;
};

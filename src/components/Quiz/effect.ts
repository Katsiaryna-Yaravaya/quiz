import {Countries} from "../../interface/countries.interface";
import {generateIndexCountry} from "../../core/utils";
import {GENERATE_NUMBER_INDEX_QUESTION_COUNTRY} from "../../constants/general.constants";
import {saveCountriesUserQuestions} from "../../redux/country/actions";

export const qwerty = () => (dispatch, getState) => {
  const {data} = getState();
  const generatedUserQuestionCountries: Countries[] = generateIndexCountry(
    data.allServerDataCountries,
    GENERATE_NUMBER_INDEX_QUESTION_COUNTRY,
  );
  dispatch(saveCountriesUserQuestions(generatedUserQuestionCountries));
}
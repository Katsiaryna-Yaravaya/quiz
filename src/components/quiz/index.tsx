import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/root-reducer";

import {Answers, Next, Question, QuestionCount} from "../index";
import {
    getCurrentQuestion,
    saveGenerateCountryInformation,
    showGenerateAnswer
} from "../../redux/country/actions";
import {generateIndexCountry} from "../../utils";
import {Country} from "../../interface/country.interface";
import {
    GENERATE_NUMBER_INDEX_QUESTION_COUNTRY_INFORMATION,
    GENERATE_NUMBER_INDEX_ANSWER_COUNTRY_INFORMATION
} from "../../constants/general";

import './index.css'

interface Props {
    question: string
}

const Quiz = ({question}: Props) => {

    const {data} = useSelector((state: RootState) => state)
    let {counter, currentQuestion, country} = useSelector((state: RootState) => state.data)
    const dispatch = useDispatch()


    useEffect(() => {
        if (data.country) {
            const generateQuestionCountryInformation: Country[] = generateIndexCountry(data.country, GENERATE_NUMBER_INDEX_QUESTION_COUNTRY_INFORMATION)
            dispatch(saveGenerateCountryInformation(generateQuestionCountryInformation))
            dispatch(getCurrentQuestion(generateQuestionCountryInformation[0]))
        }
    }, [data.country])

    useEffect(() => {
        if (country && counter) {
            const generateAnswerCountryInformation: Country[] = generateIndexCountry(country, GENERATE_NUMBER_INDEX_ANSWER_COUNTRY_INFORMATION)

            const generateAnswer = generateAnswerCountryInformation
                .map(item => item.name)
                .concat(currentQuestion.name)
                .sort(() => {
                    return 0.5 - Math.random()
                });

            dispatch(showGenerateAnswer(generateAnswer))
        }
    }, [country, counter, currentQuestion.name])

    return (

        <form className='quiz-form'>
            <QuestionCount/>
            <Question question={question}/>
            <Answers/>
            <Next/>
        </form>
    );
}

export default Quiz;

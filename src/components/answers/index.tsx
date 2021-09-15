import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {RootState} from "../../redux/root-reducer";
import { showGenerateAnswer} from "../../redux/country/actions";
import {generateIndexCountry} from "../../utils";
import {Country} from "../../interface/country.interface";

import './index.css'

const Answers = () => {

    const {currentQuestion, country, counter} = useSelector((state: RootState) => state.data)
    const dispatch = useDispatch()

    useEffect(() => {
        if (country) {
            const generateAnswerCountryInformation: Country[] = generateIndexCountry(country, 3)

            const generateAnswer = generateAnswerCountryInformation
                .map(item => item.name)
                .concat(currentQuestion.name)
                .sort(() => {
                    return 0.5 - Math.random()
                });

            dispatch(showGenerateAnswer(generateAnswer))
        }
    }, [country, counter])

    return (
        <>
            {currentQuestion.allAnswers ? currentQuestion.allAnswers.map((answer, idx) => {
                return (<div key={idx} className='answer'>
                    <div className='answer__text'>
                        {answer}
                    </div>
                </div>)
            }) : null}
        </>
    )
}

export default Answers;
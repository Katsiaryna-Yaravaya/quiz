import './index.css'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/root-reducer";
import {useEffect, useState} from "react";
import {Country} from "../../interface/country.interface";
import {generateIndexCountry} from "../../utils";
import {saveGenerateCountryInformation} from "../../redux/country/actions";

const Answers = () => {

    const [answers, setAnswers] = useState<string[]>([])

    const {currentQuestion, country} = useSelector((state: RootState) => state.data)
    console.log(country)
    // console.log(currentQuestion.name)
    // setAnswer([currentQuestion.name])
    // setAnswer()

    useEffect(() => {
        if (country) {
            const generateAnswerCountryInformation: Country[] = generateIndexCountry(country, 3)
            console.log(generateAnswerCountryInformation)

            const generateAnswer = generateAnswerCountryInformation
                .map(item => item.name)
                .concat(currentQuestion.name)
                .sort(() => {
                    return 0.5 - Math.random()
                });

            console.log(generateAnswer)

            setAnswers(generateAnswer)
            // setAnswers(generateAnswerInCorrect)
            // const allCurrentAnswers = generateAnswerCountryInformation
            // dispatch(saveGenerateCountryInformation(generateCountryInformation))
        }
    }, [])

    console.log(answers)
    /* if (country) {
         const generateAnswerCountryInformation: Country[] = generateIndexCountry(country, 3)
         console.log(generateAnswerCountryInformation)

         const generateAnswerInCorrect = generateAnswerCountryInformation
             .map(item => item.name)
             .concat(currentQuestion.name)
             .sort(() => {
                 return 0.5 - Math.random()
             });

         console.log(generateAnswerInCorrect)

         return generateAnswerInCorrect
         // setAnswers(generateAnswerInCorrect)
         // const allCurrentAnswers = generateAnswerCountryInformation
         // dispatch(saveGenerateCountryInformation(generateCountryInformation))
     }*/
    // console.log(generateAnswerInCorrect)

    // console.log('answers',answers)

    return (
        {
            answers.map(answer =>
                        <div className='answer'>
                            <div className='answer__text'>
                                {answer}
                            </div>
                        </div>
            )
        }
    )
}

export default Answers;
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/root-reducer";

import {Answers, Next, Question, QuestionCount} from "../index";
import {generateIndexCountry} from "../../utils";
import {Country} from "../../interface/country.interface";

import './index.css'
import {saveGenerateCountryInformation} from "../../redux/country/actions";

interface Props {
    question: string
}

const Quiz = ({question}: Props) => {

    const {data} = useSelector((state: RootState) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        if(data.country){
            const generateCountryInformation: Country[]  = generateIndexCountry(data.country, 10)
            dispatch(saveGenerateCountryInformation(generateCountryInformation))
        }
    }, [data.country])

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
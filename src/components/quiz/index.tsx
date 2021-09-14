import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/root-reducer";

import {Answers, Next, Question, QuestionCount} from "../index";
import {generateIndexCountry} from "../../utils";
import {Country} from "../../interface/country.interface";

import './index.css'

interface Props {
    question: string
}

const Quiz = ({question}: Props) => {

    const [allCountryInformation, setAllCountryInformation] = useState([])
    const [generateCountryInformation, setGenerateCountryInformation] = useState<Country[]>([])

    const {data} = useSelector((state: RootState) => state)

    useEffect(() => {
        setAllCountryInformation(data.country)
    }, [data.country])

    useEffect(() => {
        if (allCountryInformation) {
            const generateCountryInformation: Country[]  = generateIndexCountry(allCountryInformation)
            setGenerateCountryInformation(generateCountryInformation)
        }
    }, [allCountryInformation])

    console.log('generateCountryInformation',generateCountryInformation)
    console.log('allCountryInformation', allCountryInformation)

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
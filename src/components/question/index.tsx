import {useSelector} from "react-redux";
import {RootState} from "../../redux/root-reducer";

import './index.css'

interface Props {
    question: string
}

const Question = ({question}: Props) => {

    const {generateCountryInformation, currentQuestion} = useSelector((state: RootState) => state.data)

    return (
        <h2 className="question">{generateCountryInformation ? currentQuestion.capital + question : null}</h2>
    );
}

export default Question

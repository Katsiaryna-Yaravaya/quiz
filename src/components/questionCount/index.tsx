import {useSelector} from "react-redux";

import {RootState} from "../../redux/root-reducer";

import './index.css'

const QuestionCount = () => {

    const {generateCountryInformation, counter} = useSelector((state: RootState) => state.data)

    return (

        <div className="questionCount">
            Question
            {counter ? (<span> {counter} </span>) : null}
            of
            {generateCountryInformation ? (<span> {generateCountryInformation.length} </span>) : null}
        </div>
    );
}

export default QuestionCount;

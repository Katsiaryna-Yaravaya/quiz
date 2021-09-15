import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/root-reducer";
import {useEffect} from "react";
import {saveCounter} from "../../redux/country/actions";

const QuestionCount = () => {

    const {generateCountryInformation, counter} = useSelector((state: RootState) => state.data)
    // console.log(generateCountryInformation)

    const dispatch = useDispatch()

    // useEffect(() => {
    //     const nextQuestions = counter + 1;
    //     if (generateCountryInformation && (nextQuestions < generateCountryInformation.length)) {
    //         dispatch(saveCounter(nextQuestions));
    //     }
    // }, [generateCountryInformation])


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
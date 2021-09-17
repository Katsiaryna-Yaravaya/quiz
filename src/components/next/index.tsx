import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/root-reducer";
import {getCurrentQuestion, saveCounter} from "../../redux/country/actions";

import './index.css'

const Next = () => {

    let {generateCountryInformation, counter} = useSelector((state: RootState) => state.data)
    const dispatch = useDispatch()

    const handleNextQuestionButton = (e) => {
        e.preventDefault()

        if (generateCountryInformation && (counter < generateCountryInformation.length)) {
            // +1 тк ++counter и на 9 ломается
            const addCounterNumber = counter + 1
            dispatch(saveCounter(addCounterNumber))
            dispatch(getCurrentQuestion(generateCountryInformation[counter--]))
        }
    }

    return (

        <div className='next'>
            <button onClick={handleNextQuestionButton} type='button' className='next__button'>Next</button>
        </div>
    );
}

export default Next;

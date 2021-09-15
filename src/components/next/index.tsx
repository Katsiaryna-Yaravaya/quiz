import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/root-reducer";
import {getCurrentQuestion, saveCounter} from "../../redux/country/actions";

const Next = () => {

    let {generateCountryInformation, counter} = useSelector((state: RootState) => state.data)
    // console.log(counter)
    // console.log(generateCountryInformation)

    const dispatch = useDispatch()


    const handleNextQuestionButton = (e) => {
        e.preventDefault()
        if ((counter < 10) && generateCountryInformation) {
            const addCounterNumber = counter + 1
            dispatch(saveCounter(addCounterNumber))
            dispatch(getCurrentQuestion(generateCountryInformation[counter--]))
        }
    }

    return (
        <div className='next'>
            <button onClick={handleNextQuestionButton} className='next__button'>Next</button>
        </div>
    );
}

export default Next;

// if (generateCountryInformation) {
//     dispatch(getCurrentQuestion(generateCountryInformation[counter--]))
// }
// dispatch(saveCounter(addCounterNumber))
import {useHistory} from "react-router-dom";
import './index.css'
import {COUNTRY_ROUT, FLAG_ROUT} from "../../constants/routs";
import {getCountry} from "../../backend/api";

const Main = () => {

    const history = useHistory()

    const clickCountryHandler = () => {


        history.push(COUNTRY_ROUT)
    }

    const clickFlagHandler = () => {
        history.push(FLAG_ROUT)
    }

    return (
        <div className='main__chooseAQuiz'>
            <button
                onClick={clickCountryHandler}
                className='chooseAQuiz__button'
            >
                country
            </button>
            <button
                onClick={clickFlagHandler}
                className='chooseAQuiz__button'
            >
                flag
            </button>
        </div>
    );
}

export default Main;
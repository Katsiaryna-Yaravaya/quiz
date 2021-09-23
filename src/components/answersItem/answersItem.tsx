import './index.css'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {saveCounter} from "../../redux/country/actions";

interface Props {
    answer: string,
    answerClick: (answer: string, index?: number) => string,
    letter: string,
    correctAnswer: string
}

const AnswersItem = ({answer, answerClick, correctAnswer, letter}: Props) => {
    const [styleAnswer, setStyleClickAnswer] = useState<string>('')

    const handleClick = () => {
        const a = answerClick(answer)
        setStyleClickAnswer(a)
        console.log('a', a)

    }

    return (
        <div onClick={handleClick} className={styleAnswer ? `answer ${styleAnswer}` : `answer ${styleAnswer}`}>
            <span className="answer__letter">{letter}</span>

            <span title={answer} className="answer__text">
        {' '}
                {answer}{' '}
      </span>
        </div>
    )
}

export default AnswersItem

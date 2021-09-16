import {useSelector} from "react-redux";

import {RootState} from "../../redux/root-reducer";

import './index.css'

const Answers = () => {

    const {currentQuestion} = useSelector((state: RootState) => state.data)
    const letterMapping = ["A", "B", "C", "D"];

    const handleAnswerClick = (e, answer) => {
        e.preventDefault()

        const a = e.target.closest('.answer')

        if (answer === currentQuestion.name) {
            a.classList.add('correct')
        }
        if (answer !== currentQuestion.name) {
            a.classList.add('incorrect')
        }
    }

    return (
        <>
            {currentQuestion.allAnswers ? currentQuestion.allAnswers.map((answer, idx) => {
                return (<div
                    key={idx}
                    onClick={(e) => handleAnswerClick(e, answer)}
                    className='answer'>

                    <span className="answer__letter">
                        {letterMapping.map((item, i) => {
                            if (i === idx) {
                                return item
                            }
                        })}
                    </span>

                    <span className='answer__text'>
                        {answer}
                    </span>
                </div>)
            }) : null}
        </>
    )
}

export default Answers;

import Question from "../question";
import Answers from "../answers";
import Next from "../next";

import './index.css'
interface Props {
    question: string
}
const Quiz = ({  question }: Props) => {


    return (
        <form className='quiz-form'>
            <Question question={question}/>
            <Answers />
            <Next/>
        </form>
    );
}

export default Quiz;
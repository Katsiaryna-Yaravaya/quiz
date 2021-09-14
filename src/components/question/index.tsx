import './index.css'

interface Props {
    question: string
}

const Question = ({  question }: Props) => {

    return (
        <h2 className="question">{question}</h2>
    );
}

export default Question
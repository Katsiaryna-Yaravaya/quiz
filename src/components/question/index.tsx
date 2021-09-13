import './index.css'

interface Props {
    question: string
}


const Question = ({  question }: Props) => {
    console.log(question)
    return (
        <h2 className="question">{question}</h2>
    );
}
export default Question
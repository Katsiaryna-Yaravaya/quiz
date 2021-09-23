import './index.css'

interface Props {
  answer: string,
    answerClick: (
        answer: string,
        index?: number
    ) => void,
    letter: string,
    setStyleClickAnswer?: string,
    className?:string,
    index: number
}

const AnswersItem = ({ answer, answerClick, letter, setStyleClickAnswer, className, index }: Props) => {

  return (
    <div onClick={() => answerClick( answer, index)} className={`answer ${setStyleClickAnswer}`}>
      <span className="answer__letter">{letter}</span>

      <span title={answer} className="answer__text">
        {' '}
        {answer}{' '}
      </span>
    </div>
  )
}
export default AnswersItem

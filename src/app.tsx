import './index.css'
import Question from "./question";

const App = () => {

    return (
        <div className='app container'>
            <h1 className='app__heading'>
                COUNTRY QUIZ
            </h1>

            <form>
                <Question content = 'question'/>

                {/*<input type='submit'>a</input>*/}
                {/*<input type='submit'>b</input>*/}
                {/*<input type='submit'>c</input>*/}
                {/*<input type='submit'>d</input>*/}
            </form>
        </div>
    );
}

export default App;
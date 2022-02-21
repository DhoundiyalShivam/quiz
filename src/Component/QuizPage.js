import React from 'react'
import './Quiz.css'
function QuizPage(props){
    const{quizData}=props;
    return(
        <div className='quizPage'>
            {quizData.map(data=>(
                <div className='questions'>
                    <h3>{data.question}</h3>
                    <div className='options'>
                    {data.options.sort().map(d=>(<div className='optionValues' onClick={()=>props.answerFunc(d)}>{d}</div>))}
                    </div>
                </div>
            ))}
            <div className='checkAnswerBtn'><button className='checkAnswers'>Check Answers</button>
        </div>
        </div>
    )
}
export default QuizPage
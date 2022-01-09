import React from 'react'
import './Quiz.css'
function QuizPage(props){
    // const [newquizData,setNewQuizData] = React.useState([])
    const{quizData}=props;
    let quizObj =[]
    quizObj = quizData.map(d=>{
return{
    question: d.question,
    options: [d.correct_answer, ...d.incorrect_answers]   
}
    })
    console.log(quizData)
    console.log(quizObj)
    return(
        <div className='quizPage'>
            {quizObj.map(data=>(
                <div className='questions'>
                    <h3>{data.question}</h3>
                    <div className='options'>
                    {data.options.sort().map(d=>(<div className='optionValues'>{d}</div>))}
                    </div>
                </div>
            ))}
            <div className='checkAnswerBtn'><button className='checkAnswers'>Check Answers</button>
        </div>
        </div>
    )
}
export default QuizPage
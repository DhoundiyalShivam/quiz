import React, { useEffect } from 'react'
import QuizPage from './QuizPage'
import './Quiz.css'
export default function Quiz() {

    const [showQuiz, setShowQuiz] = React.useState(false)
    const [quizData, setQuizData] = React.useState([])
    const [selected,setSelected] = React.useState(false)
    const[answer,setAnswer] = React.useState('')
    let quizObj = []
    const startQuiz = () => { setShowQuiz(!showQuiz) }
    useEffect(function () {
        fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple').then(res => res.json()).then(data => setQuizData(data.results))
    }, [])
    quizObj = quizData.map(d => {
        return {
            question: d.question,
            options: [d.correct_answer, ...d.incorrect_answers]
        }
    })
    const answerFunc = (ans) => {
        setAnswer(ans)
        setSelected(!selected)
        console.log(selected)
        console.log(answer)
    }
    return (
        <div className='quizBox'>
            {showQuiz ? <QuizPage quizData={quizObj} answerFunc={answerFunc} /> : <div className='quizLandingPage'>
                <h1 className='quizHeading'>Quiz</h1>
                <button className='startQuizButton' onClick={startQuiz}>Start Quiz</button></div>}
        </div>
    )
}
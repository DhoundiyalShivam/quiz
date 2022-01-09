import React, { useEffect } from 'react'
import QuizPage from './QuizPage'
import './Quiz.css'
export default function Quiz() {

    const [showQuiz, setShowQuiz] = React.useState(false)
    const [quizData, setQuizData] = React.useState([])
    const startQuiz = () => { setShowQuiz(!showQuiz) }
 
    useEffect(  function () {
        fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple').then(res => res.json()).then(data => setQuizData(data.results))
    }, [])
    return (
        <div className='quizBox'>
            {showQuiz ? <QuizPage quizData={quizData} /> : <div className='quizLandingPage'>
                <h1 className='quizHeading'>Quiz</h1>
                <button className='startQuizButton' onClick={startQuiz}>Start Quiz</button></div>}
        </div>
    )
}
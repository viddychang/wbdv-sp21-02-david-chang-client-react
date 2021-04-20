import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";
import '../styles.css';
import questionService from "../../services/questions-service"
import quizzesService from "../../services/quizzes-service";

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [attempts, setAttempts] = useState([])
    const [graded, setGraded] = useState(false)
    const [currentGrade, setCurrentGrade] = useState('')

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })

    }, [quizId])

    const getPastGrades = () => {
        quizzesService.getQuizAttemptsForQuiz(quizId)
            .then((attempts) => {
                setAttempts(attempts)
            })

    }
    
    const submitTheQuiz = () => {
        quizzesService.submitQuiz(quizId, questions)
            .then((attempt) => setCurrentGrade(attempt.score))
    }

    return(
        <div>
            <h3>Quiz {quizId} </h3>
            <ul>
                {
                    questions.map((question) => {
                        return(
                            <li className="list-group-item w-75">
                                <Question question={question}
                                        graded={graded}/>
                            </li>
                        )
                    })
                }

            <button className="btn btn-success wbdv-icon-padding" 
                        onClick={()=> {
                                        setGraded(true)
                                        submitTheQuiz()
                                        
                                        getPastGrades()}}>
                Submit
            </button>
            <br/>
            <br/>
            <div className="wbdv-icon-padding">
                {graded &&
                <>
                Your current score: {currentGrade}
                </>
                }
            </div>

            <div className="wbdv-icon-padding">
                {
                graded &&
                <>
            
                Your Past Results:
                    <ol className="list-group">
                        {
                            attempts.map((attempt) => {
                                return (
                                    <li className="list-group-item">{attempt.score}</li>
                                )

                            })
                        }
                    </ol>
                </>
            }
            </div>
            </ul>

        </div>
    )
}

export default Quiz;


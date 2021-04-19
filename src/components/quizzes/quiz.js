import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";
import '../styles.css';
import questionService from "../../services/questions-service";
import quizzesService from "../../services/quizzes-service";

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [graded, setGraded] = useState(false);
    const [quiz, setQuiz] = useState({});
    const [quizResults, setQuizResults] = useState({})
    const [attempts, setAttempts] = useState([])

    
    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then(response => setQuestions(response));
        
        quizzesService.findQuizById(quizId)
            .then(response => setQuiz(response));
        
        if (graded) {
            quizzesService.submitQuiz(quiz._id, questions)
                .then(response => setQuizResults(response));
        }
    }, [])

    return(
        <div>
            <h3>Quiz {quizId} </h3>
            <ul>
                {
                    questions.map((question) => {
                        return(
                            <li className="list-group-item w-75">
                                <Question question={question}
                                          graded={graded}
                                          questions={questions}
                                          setQuestions={setQuestions}
                                          />
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button class="btn btn-success" onClick={ () => 
                    setGraded(true)} >Submit</button>
            </div>
            <div>
                Score: {quizResults}
            </div>
            <div>
                <button class="btn btn-success" onClick={ () => setAttempts(
                    quizzesService.findQuizById(quizId)
                )}>View All Attempts</button>

                <ol>
                    {attempts.map(quizScore => <li>{quizScore}</li>)}
                </ol>
            </div>
        </div>
    )
}

export default Quiz;
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";
import '../styles.css';
import questionService from "../../services/questions-service"
import quizzesService from "../../services/quizzes-service";

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then(response => setQuestions(response));
    }, [])

    return(
        <div>
            <h3>Quiz {quizId} </h3>
            <ul>
                {
                    questions.map((question) => {
                        return(
                            <li className="list-group-item w-75">
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="btn btn-success" onClick={()=>{quizzesService.submitQuiz(quizId,questions)}}>
                Submit
            </button>
        </div>
    )
}

export default Quiz;
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";
import '../styles.css';
import questionService from "../../services/questions-service"

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
        </div>
    )
}

export default Quiz;
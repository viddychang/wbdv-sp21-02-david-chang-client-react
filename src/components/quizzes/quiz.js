import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";
import '../styles.css';
import quizzesService from "../../services/"

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        // TODO: move this to a service file
        setQuestions(quizzesService.findAllQuizzes())
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
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";
import '../styles.css';

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        // TODO: move this to a service file
        fetch(`http://localhost:4000/api/quizzes/${quizId}/questions`)
            .then(response => response.json())
            .then((questions) => {
                setQuestions(questions)
            })
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
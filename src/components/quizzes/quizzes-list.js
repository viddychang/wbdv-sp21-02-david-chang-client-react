import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        // TODO: move this to a service file
        fetch("http://localhost:4000/api/quizzes")
            .then(response => response.json())
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div>
            <h2>Quizzes</h2>
            <ul>
                {
                    quizzes.map((quiz) => {
                        return(
                            <li className="list-group-item d-flex">
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`} className="mr-auto">
                                    {quiz.title}
                                </Link>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    <button className="btn btn-primary">Start</button>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default QuizzesList;
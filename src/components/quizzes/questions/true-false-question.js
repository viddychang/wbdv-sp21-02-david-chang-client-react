
import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")

    return(
        <div>
            <h5>
                {question.question}
                {
                    question.correct === correctAnswer &&
                    <i className="fas fa-check color-green wbdv-icon-padding"></i>
                }
                {
                    question.correct !== correctAnswer && correctAnswer !== "" &&
                    <i className="fas fa-times color-red wbdv-icon-padding"></i>
                }
            </h5>
            <li className={`list-group-item
                            ${question.correct === 'true' && correctAnswer !== '' ? 'list-group-item-success' : ''}
                            ${correctAnswer !== question.correct && correctAnswer !== "" && correctAnswer === 'true' ? 'list-group-item-danger' : ''}`}>
                                <label><input
                                    onClick={() => {
                                        setYourAnswer('true')
                                    }}
                                    type="radio"
                                    name={question._id}/> True</label>
            </li>
            <li className={`list-group-item
                            ${question.correct === 'false' && correctAnswer !== '' ? 'list-group-item-success' : ''}
                            ${correctAnswer !== question.correct && correctAnswer !== "" && correctAnswer === 'false' ? 'list-group-item-danger' : ''}`}>
                                <label><input
                                    onClick={() => {
                                        setYourAnswer('false')
                                    }}
                                    type="radio"
                                    name={question._id}/> False</label>
                            </li>
            <p>
                Your answer: {yourAnswer}
            </p>
            
            <button class="btn btn-success" onClick={ () => setCorrectAnswer(yourAnswer)}>Grade</button>
            
        </div>
    )
}

export default TrueFalseQuestion
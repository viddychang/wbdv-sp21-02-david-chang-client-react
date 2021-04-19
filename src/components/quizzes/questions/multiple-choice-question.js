import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
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
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item
                            ${question.correct === choice && correctAnswer !== '' ? 'list-group-item-success' : ''}
                            ${correctAnswer !== question.correct && correctAnswer !== "" && correctAnswer === choice ? 'list-group-item-danger' : ''}`}>
                                <label><input
                                    onClick={() => {
                                        setYourAnswer(choice)
                                    }}
                                    type="radio"
                                    name={question._id}/> {choice}</label>
                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>
            
            {/* <button class="btn btn-success" onClick={ () => setCorrectAnswer(yourAnswer)}>Grade</button> */}

            {/* <p>{question.correct}</p>
            <p></p>
            <p>{question.type}</p> */}
        </div>
    )
}

export default MultipleChoiceQuestion
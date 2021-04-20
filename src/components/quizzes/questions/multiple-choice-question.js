import React, {useEffect, useState} from "react";

const MultipleChoiceQuestion = ({question, graded, setGraded, yourAnswer, setYourAnswer, correctAnswer}) => {

    return(
        <div>
            <h5>
                {question.question}
                {
                    question.correct === yourAnswer && graded &&
                    <i className="fas fa-check color-green wbdv-icon-padding"></i>
                }
                {
                    question.correct !== yourAnswer && graded &&
                    <i className="fas fa-times color-red wbdv-icon-padding"></i>
                }
            </h5>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item
                            ${question.correct === choice && graded ? 'list-group-item-success' : ''}
                            ${yourAnswer !== question.correct && graded && yourAnswer === choice ? 'list-group-item-danger' : ''}`}>
                                <label><input
                                    onClick={() => {
                                        setYourAnswer(choice)
                                        question.answer = yourAnswer
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
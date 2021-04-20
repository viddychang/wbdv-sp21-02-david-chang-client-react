
import React, {useState} from "react";

const TrueFalseQuestion = ({question, graded, setGraded, yourAnswer, setYourAnswer, correctAnswer}) => {


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
            <li className={`list-group-item
                            ${question.correct === 'true' && graded ? 'list-group-item-success' : ''}
                            ${yourAnswer !== question.correct && graded && yourAnswer === 'true'? 'list-group-item-danger' : ''}`}>
                                <label><input
                                    onClick={() => {
                                        setYourAnswer('true')
                                    }}
                                    type="radio"
                                    name={question._id}/> True</label>
            </li>
            <li className={`list-group-item
                            ${question.correct === 'false' && graded ? 'list-group-item-success' : ''}
                            ${yourAnswer !== question.correct && graded && yourAnswer === 'false' ? 'list-group-item-danger' : ''}`}>
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
            
            {/* <button class="btn btn-success" onClick={ () => setCorrectAnswer(yourAnswer)}>Grade</button> */}
            
        </div>
    )
}

export default TrueFalseQuestion
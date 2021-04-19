import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({
                    question,
                    quizId,
                    graded,
                    questions,
                    setQuestions
                    }) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion question={question}
                                   quizId={quizId}
                                   graded={graded}
                                   questions={questions}
                                   setQuestions={setQuestions}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion question={question}
                                        quizId={quizId}
                                        graded={graded}
                                        questions={questions}
                                        setQuestions={setQuestions}/>
            }
        </div>
    )
}

export default Question
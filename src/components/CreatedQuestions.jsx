import React from "react";
import Question from "./Question";

const CreatedQuestions = ({questions, deleteQuestion}) => {
    return (
        <div>
            <ul>
                {questions.map(question => {
                    return (<Question key={question.id} question={question} deleteQuestion={deleteQuestion}></Question>);
                })}
            </ul>
        </div>
    );
}

export default CreatedQuestions;
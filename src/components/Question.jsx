import React from "react";

const Question = ({question, deleteQuestion}) => {
    const {id, text, answer1, answer2, answer3, answer4, correctAnswer, favorite} = question;
    return (
        <div className="card" style={{width: "18rem"}}>
            <button type="button" className="align-baseline btn-close " aria-label="Close"
                    onClick={() => deleteQuestion(question)}></button>
            <div className="card-body">
                <h5 className="card-title">Pregunta nº{id}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{text}</h6>
                <div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                    <input type="radio" className="btn-check" name="btn-answer" id={`${id}vbtn-radio1"`}
                           autoComplete="off"></input>
                    <label className="btn btn-outline-danger"
                           htmlFor={`${id}vbtn-radio1"`}>{answer1}</label>
                    <input type="radio" className="btn-check" name="btn-answer" id={`${id}vbtn-radio2"`}
                           autoComplete="off"></input>
                    <label className="btn btn-outline-danger"
                           htmlFor={`${id}vbtn-radio2"`}>{answer2}</label>
                    <input type="radio" className="btn-check" name="btn-answer" id={`${id}vbtn-radio3"`}
                           autoComplete="off"></input>
                    <label className="btn btn-outline-danger"
                           htmlFor={`${id}vbtn-radio3"`}>{answer3}</label>
                    <input type="radio" className="btn-check" name="btn-answer" id={`${id}vbtn-radio4"`}
                           autoComplete="off"></input>
                    <label className="btn btn-outline-danger"
                           htmlFor={`${id}vbtn-radio4"`}>{answer4}</label>
                </div>
            </div>
        </div>
    );
}

export default Question;
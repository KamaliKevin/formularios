import React, {useState} from 'react';
import Swal from "sweetalert2";

const QuestionForm = ({addQuestion}) => {
    const [question, setQuestion] = useState({
        text: "text",
        answer1: "answer 1",
        answer2: "answer 2",
        answer3: "answer 3",
        answer4: "answer 4",
        correctAnswer: 1,
        favorite: false
    });


    const handleChange = (e) => {
        let newValue = (e.target.type === "checkbox")  ? e.target.checked : e.target.value;

        if (e.target.type === "radio") newValue = parseInt(e.target.id[e.target.id.length-1]);

        setQuestion({
            ...question,
            [e.target.name]: newValue
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        addQuestion({
            ...question
        });

        Swal.fire({
            icon: "success",
            title: "Pregunta añadida correctamente",
            showConfirmButton: false,
            timer: 1200
        });
    }



    return (
        <form onSubmit={handleSubmit} >
            <textarea
                className="form-control mb-2"
                placeholder="question text"
                name="text"
                value={question.text}
                onChange={handleChange}
            />

            <div className="form-check mb-2">
                <input type="radio" name="correctAnswer" className="form-check-input" id="inputCheck1"
                       onChange={handleChange}/>
                <input
                    type="text"
                    placeholder= "answer 1"
                    className= "form-control mb-2"
                    name="answer1"
                    htmlFor="inputCheck1"
                    value={question.answer1}
                    onChange={handleChange}
                />
            </div>
            <div className="form-check mb-2">
                <input type="radio" name="correctAnswer" className="form-check-input" id="inputCheck2"
                       onChange={handleChange}/>
                <input
                    type="text"
                    placeholder= "answer 2"
                    className= "form-control mb-2"
                    name="answer2"
                    htmlFor="inputCheck2"
                    value={question.answer2}
                    onChange={handleChange}
                />
            </div>
            <div className="form-check mb-2">
                <input type="radio" name="correctAnswer" className="form-check-input" id="inputCheck3"
                       onChange={handleChange}/>
                <input
                    type="text"
                    placeholder= "answer 3"
                    className= "form-control mb-2"
                    name="answer3"
                    htmlFor="inputCheck3"
                    value={question.answer3}
                    onChange={handleChange}
                />
            </div>
            <div className="form-check mb-2">
                <input type="radio" name="correctAnswer" className="form-check-input mb-2" id="inputCheck4"
                       onChange={handleChange}/>
                <input
                    type="text"
                    placeholder= "answer 4"
                    className= "form-control mb-2"
                    name="answer4"
                    htmlFor="inputCheck4"
                    value={question.answer4}
                    onChange={handleChange}
                />
            </div>
            <div className="form-check form-switch form-check-reverse mb-2">
                <input type="checkbox" name="favorite" className="form-check-input " id="inputCheckFavourite" checked={question.favorite}
                    //onChange={(e) => (setRegistroForm({...registroForm, priority: e.target.checked}))}/
                       onChange={handleChange}/>
                <label className="form-check-label" htmlFor="inputCheckFavourite">Favorite</label>
            </div>
            <button type="submit" className="btn btn-primary">
                Añadir
            </button>
        </form>
    );
};

export default QuestionForm;
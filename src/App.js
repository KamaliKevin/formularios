import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useState} from "react";
import QuestionForm from "./components/QuestionForm";
import CreatedQuestions from "./components/CreatedQuestions";
import Swal from "sweetalert2";

function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [questions, setQuestions] = useState([]);

  const addQuestion = (newQuestion) => {
    newQuestion.id = currentQuestionId;
    setCurrentQuestionId(currentQuestionId + 1);
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (question) => {
    Swal.fire({
      title: `¿De verdad quieres eliminar la pregunta nº${question.id}?`,
      text: `(${question.text})`,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "red",
      cancelButtonText: "Conservar",
      cancelButtonColor: "blue"
    }).then((result) => {
      if (result.isConfirmed) {
        let updatedQuestions = questions.filter(element => element.id !== question.id);
        setQuestions([...updatedQuestions]);
        Swal.fire("La pregunta ha sido eliminada", "", "success");
      }
    });
  };

  return (
    <div className="App p-5">
      <QuestionForm addQuestion={addQuestion}></QuestionForm>
      <CreatedQuestions questions={questions} deleteQuestion={deleteQuestion}></CreatedQuestions>
    </div>
  );
}

export default App;

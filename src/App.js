import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useState} from "react";
import QuestionForm from "./components/QuestionForm";
import CreatedQuestions from "./components/CreatedQuestions";

function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [questions, setQuestions] = useState([]);

  const addQuestion = (newQuestion) => {
    newQuestion.id = currentQuestionId;
    setCurrentQuestionId(currentQuestionId + 1);
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (question) => {
    let updatedQuestions = questions.filter(element => element.id !== question.id);
    setQuestions([...updatedQuestions]);
  };

  return (
    <div className="App p-5">
      <QuestionForm addQuestion={addQuestion}></QuestionForm>
      <CreatedQuestions questions={questions} deleteQuestion={deleteQuestion}></CreatedQuestions>
    </div>
  );
}

export default App;

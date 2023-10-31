import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [question, SetQuestion] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    console.log(data);
    SetQuestion(data.results);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestion={fetchQuestions}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                question={question}
                score={score}
                setScore={setScore}
                SetQuestion={SetQuestion}
              />
            }
          />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React, {useEffect , useState, createContext} from 'react';
import QuizContainer from './QuizContainer';
import Results from './Results';
import Header from './Header';
import axios from 'axios'
import '../style/app.css'

export const QuestionsContext = createContext()

function App() {
  const [apiQuestions, setApiquestions] = useState([])
  const [questionNumber, setQuestionNumber] = useState(0)
  const [rightAnswerCounter, setRightAnswerCounter] = useState(0);
  const apiAmountQuestion = 3

  const API_LINK = `https://opentdb.com/api.php?amount=${apiAmountQuestion}`

  useEffect(() => {
    axios.get(API_LINK)
      .then(function (response) {
        setApiquestions(response.data.results)
    })
  }, [API_LINK])

  return (
    <QuestionsContext.Provider value={{apiQuestions, questionNumber, setQuestionNumber, setRightAnswerCounter, rightAnswerCounter}}>
      <div className="app">
        <Header />
        {(apiQuestions.length !== 0) && (questionNumber < apiAmountQuestion) && <QuizContainer />}
        {questionNumber === apiAmountQuestion && <Results />}
      </div>
    </QuestionsContext.Provider>
  );
}

export default App;

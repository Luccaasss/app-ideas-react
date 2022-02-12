import React, {useEffect , useState, createContext} from 'react';
import QuizContainer from './QuizContainer';
import Header from './Header';
import axios from 'axios'
import '../style/app.css'

const API_LINK = 'https://opentdb.com/api.php?amount=3'
export const QuestionsContext = createContext()

function App() {
  const [apiQuestions, setApiquestions] = useState([])
  const [questionNumber, setQuestionNumber] = useState(0)

  useEffect(() => {
    axios.get(API_LINK)
      .then(function (response) {
        setApiquestions(response.data.results)
    })
  }, [])

  return (
    <QuestionsContext.Provider value={{apiQuestions, questionNumber, setQuestionNumber}}>
      <div className="app">
        <Header />
        {(apiQuestions.length !== 0) && <QuizContainer />}
      </div>
    </QuestionsContext.Provider>
  );
}

export default App;

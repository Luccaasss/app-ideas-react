import React, { useContext, useState} from 'react';
import QuestionBar from './QuestionBar';
import {QuestionsContext} from './App';

export default function QuizContainer() {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const {
    apiQuestions, 
    questionNumber, 
    setQuestionNumber
  } = useContext(QuestionsContext)

  const {
    category,
    type,
    difficulty,
    question,
    correct_answer,
    incorrect_answers
  } = apiQuestions[questionNumber];

  const allAnsers = [correct_answer, ...incorrect_answers].sort()

  return (
    <div>
      <QuestionBar question={question}/>

      <div className='answers-box'>
        {allAnsers.map((element, i) => 
          <div 
            className='answer'
            onClick={() => {
              setSelectedAnswer(element)
              console.log(element)
            }}
            key={i}>{element}</div>)
        }
      </div>

      <button onClick={() => {
        setQuestionNumber(questionNumber + 1)
      }}>+</button>
    </div>
  );
}

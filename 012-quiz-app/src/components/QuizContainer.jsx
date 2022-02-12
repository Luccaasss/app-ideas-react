import React, { useContext, useState } from 'react';
import QuestionBar from './QuestionBar';
import { QuestionsContext } from './App';

export default function QuizContainer() {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [selectedIdAnswer, setSelectedIdAnswer] = useState(10);

  const {
    apiQuestions,
    questionNumber,
    setQuestionNumber,
    setRightAnswerCounter, 
    rightAnswerCounter
  } = useContext(QuestionsContext)

  const {
    question,
    correct_answer,
    incorrect_answers,
  } = apiQuestions[questionNumber];

  const allAnsers = [correct_answer, ...incorrect_answers].sort()

  return (
    <div>
        <QuestionBar question={question} />

        <div className='answers-box'>
          {allAnsers.map((element, i) =>
            <div
              className={`answer ${selectedIdAnswer === i ? 'active' : ''}`}
              onClick={() => {
                setSelectedAnswer(element)
                setSelectedIdAnswer(i)
                console.log(element)
              }}
              key={i}>{element}</div>)
          }
        </div>

        <button
          disabled={selectedIdAnswer === 10}
          onClick={() => {
            setQuestionNumber(questionNumber + 1)
            setSelectedIdAnswer(10)
            if (selectedAnswer === correct_answer) {
              setRightAnswerCounter(rightAnswerCounter + 1)
            }
          }}>Next</button>

        <div>
          {rightAnswerCounter}
          {correct_answer}
        </div>
      </div>
  ) 

}

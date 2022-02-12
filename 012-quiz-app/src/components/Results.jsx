import React, {useContext} from 'react';
import {QuestionsContext} from './App';

export default function Results() {
  const {
    rightAnswerCounter
  } = useContext(QuestionsContext)

  return (
    <>
      <div className='title-results'>Results</div>
      <div className='results'>Right answers: {rightAnswerCounter}</div>
    </>
  )
}

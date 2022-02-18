import React, { useState } from 'react';

const words = ['The', 'World', 'is', 'making', 'that', 'The', 'is'];

function App() {
  const [inputWords, setInputWords] = useState('');
  const [objWords, setObjWords] = useState(null)

  function counterWords(listWords) {
    const Obj = {}
    const Arr = []
    listWords.forEach(word => {
      if (Obj[word]) Obj[word] = Obj[word] + 1;
      else Obj[word] = 1;
    })

    for (let i in Obj) {
      Arr.push([[i], [Obj[i]]])
    }

    setObjWords(Arr)
    console.log(objWords)
    console.log('array', Arr)
  }

  function createArrayWords(text){
    const arrWords = text.split(' ');
    counterWords(arrWords)
  }

  return (
    <div>
      <p>Counter words</p>

      <textarea
        name="input-text"
        id="input-text"
        cols="30"
        rows="10"
        onChange={(event) => {
          setInputWords(event.target.value)
        }}
      >
      </textarea>

      <button
        onClick={() => {
          createArrayWords(inputWords)
          console.log(inputWords)
        }}
      >
        Count words
      </button>

      {objWords && objWords.map((e, i) => <li key={i}>{e[0]} - {e[1]}</li>)}

    </div>
  );
}

export default App;

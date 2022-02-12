import React, {useState} from 'react'
import './app.css'

function App() {
  const [currentEmoji, setCurrentEmoji] = useState(0);
  const [emojiDisplay, setEmojiDisplay] = useState('😎');

  const emojiFace = [
    {id: 0, emoji: '😎'},
    {id: 1, emoji: '😂'},
    {id: 2, emoji: '😘'},
    {id: 3, emoji: '😛'},
  ]

  //TODO setCurrentEmoji({id: e.id, emoji: e.emoji})

  return (
    <div className="App">
      <div className='display-emojis'>{emojiDisplay}</div>

      <div className="emoji-options">
        {emojiFace.map(e => (
          <div 
            className={`btn ${(currentEmoji === e.id) ? 'active' : ''}`} 
            key={e.id}
            onClick={() => {
              setCurrentEmoji(e.id)
              setEmojiDisplay(e.emoji)
            }} 
          >{e.emoji}</div>
        ))}
      </div>

    </div>
  );
}

export default App;

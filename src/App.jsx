import './App.css'
import Score from "./Score.jsx";
import Cat from "./Cat.jsx";
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);

  const handleCatClick = () => {
    setScore(prevScore => prevScore + 1);
  };

  return (
      <>
          <Score score={score}/>
          <Cat onCatClick={handleCatClick}/>
      </>
  )
}

export default App

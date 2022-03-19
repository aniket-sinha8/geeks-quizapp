import React, {useState} from 'react';
import './App.css';
import { Questions } from './Questions';
import Button from '@mui/material/Button';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if(nextQuestion < Questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  const restart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div className='quiz-arena'>
        {showScore ? (
          <div className='score-arena'>
            <h2>Your score is {score} out of {Questions.length}!!</h2>
            <Button color='success' variant="contained" onClick={restart}>Restart</Button>
          </div>
        ) : (
          <div>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{Questions.length}
              </div>
              <div className='question-arena'>{Questions[currentQuestion].question}</div>
            </div>
            
            <div className='answer-arena'>
              {Questions[currentQuestion].options.map((option) => (
                <span className='button' onClick={() => handleClick(option.isCorrect)}>
                  <Button color='success' variant="outlined">{option.answer}</Button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

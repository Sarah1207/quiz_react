import React, { useState } from "react";
import questions from "./questions";
import "./App.scss";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  const handleClickStartAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app" data-testid="quiz">
      {/* Score Screen */}
      {showScore ? (
        <div className="score-screen">
          <div className="score-section">
            Your score is {score} / {questions.length}
          </div>
          <div className="start-again">
            {score < questions.length ? (
              <button onClick={handleClickStartAgain}>Start again</button>
            ) : (
              <p> Congrats !</p>
            )}
          </div>
        </div>
      ) : (
        // Question Screen
        <>
          <div className="question-section" data-testid="question-screen">
            <div className="question-count">
              <span>Question n°{currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, key) => {
                return (
                  <button
                    key={key}
                    onClick={() => {
                      handleClick(answerOption.isCorrect);
                    }}
                  >
                    {answerOption.answerText}
                  </button>
                );
              }
            )}
          </div>
        </>
      )}
    </div>
  );
}

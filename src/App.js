import React, { useState } from 'react';
import questions from './questions';
import ironMan from './assets/ironman.png';
import spiderMan from './assets/spiderman.png';
import captainAmerica from './assets/captainamerica.png';
import './App.css';

const badges = {
  ironMan: { img: ironMan, label: 'Iron Man Genius Badge' },
  spiderMan: { img: spiderMan, label: 'Spider Sense Badge' },
  captainAmerica: { img: captainAmerica, label: 'Captain America Leadership Badge' }
};

function getTodayKey() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showBadge, setShowBadge] = useState(false);
  const [badge, setBadge] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [streak, setStreak] = useState(() => {
    let value = localStorage.getItem('streak') || 0;
    return parseInt(value, 10);
  });

  const handleAnswer = (ans) => {
    const updated = [...answers, ans];
    setAnswers(updated);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setCompleted(true);
      // Check streak
      const lastQuiz = localStorage.getItem('lastQuizDay');
      const todayKey = getTodayKey();
      let newStreak = streak;
      if (lastQuiz !== todayKey) {
        newStreak += 1;
        localStorage.setItem('lastQuizDay', todayKey);
        localStorage.setItem('streak', newStreak);
        setStreak(newStreak);
      }
      // Random badge
      const keys = Object.keys(badges);
      const bKey = keys[Math.floor(Math.random() * keys.length)];
      setBadge(badges[bKey]);
      setShowBadge(true);
    }
  };

  const restartQuiz = () => {
    setAnswers([]);
    setCurrentQ(0);
    setShowBadge(false);
    setCompleted(false);
  };

  return (
    <div className="app">
      <header className="marvel-header">
        <img src={ironMan} alt="Iron Man" className="hero-icon" />
        <img src={spiderMan} alt="Spider-Man" className="hero-icon" />
        <img src={captainAmerica} alt="Captain America" className="hero-icon" />
        <h1>Marvel Math Quiz!</h1>
        <div className="streak">Streak: {streak}🔥</div>
      </header>
      <main>
        {!completed ? (
          <div className="question-card">
            <h2>Question {currentQ + 1} of {questions.length}</h2>
            <div className="question-text">{questions[currentQ].text}</div>
            {questions[currentQ].type === 'mcq' ? (
              <div className="options">
                {questions[currentQ].options.map((opt, idx) => (
                  <button key={idx} className="option-btn" onClick={() => handleAnswer(opt)}>{opt}</button>
                ))}
              </div>
            ) : (
              <div>
                <input className="desc-input" type="text" placeholder="Type your answer" onBlur={e => handleAnswer(e.target.value)} />
              </div>
            )}
          </div>
        ) : (
          <div className="result-card">
            <h2>Quiz Complete!</h2>
            <p>You answered {answers.length} questions.</p>
            <button className="restart-btn" onClick={restartQuiz}>Try again</button>
            {showBadge && badge && (
              <div className="badge-popup">
                <img src={badge.img} alt={badge.label} className="badge-img" />
                <p>You've earned: <strong>{badge.label}</strong>!</p>
              </div>
            )}
          </div>
        )}
        <div className="progress-bar">
          Progress: {Math.round(((currentQ) / questions.length) * 100)}%
        </div>
      </main>
      <footer className="tips">Tip: Play daily to unlock more Marvel badges and keep your streak!</footer>
    </div>
  );
}

export default App;

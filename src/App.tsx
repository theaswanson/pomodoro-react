import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Pomodoro } from './Pomodoro';

function App() {
  const [workTime] = useState(0.1);
  const [shortBreakTime] = useState(0.05);
  const [longBreakTime] = useState(0.2);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Pomodoro workTime={workTime} shortBreakTime={shortBreakTime} longBreakTime={longBreakTime} />
      </header>
    </div>
  );
}

export default App;

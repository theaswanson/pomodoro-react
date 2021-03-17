import React, { useState } from 'react';
import './App.scss';
import { Pomodoro } from './Pomodoro';

function App() {
  const [workTime] = useState(25);
  const [shortBreakTime] = useState(5);
  const [longBreakTime] = useState(15);

  return (
    <div className="Body">
      <div className="Header">
        <h1 className="noselect">Pomodoro</h1>
      </div>
      <Pomodoro workTime={workTime} shortBreakTime={shortBreakTime} longBreakTime={longBreakTime} />
      <div className="Footer">
        <h1 className="noselect">Options</h1>
      </div>
    </div>
  );
}

export default App;

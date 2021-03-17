import React, { useState } from 'react';
import './App.scss';
import { Options } from './Options';
import { Pomodoro } from './Pomodoro';

function App() {
  const [workTime, setWorkTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [optionsShown, setOptionsShown] = useState(false);

  function workTimeChanged(event: any) {
    setWorkTime(event.target.value);
  }

  function shortBreakTimeChanged(event: any) {
    setShortBreakTime(event.target.value);
  }

  function longBreakTimeChanged(event: any) {
    setLongBreakTime(event.target.value);
  }

  function toggleOptions() {
    setOptionsShown(!optionsShown);
  }

  return (
    <div className="Body">
      <div className="Header">
        <h1 className="noselect">Pomodoro</h1>
      </div>
      {!optionsShown &&
        <Pomodoro
          workTime={workTime}
          shortBreakTime={shortBreakTime}
          longBreakTime={longBreakTime} />}
      {optionsShown &&
        <Options
          workTime={workTime}
          shortBreakTime={shortBreakTime}
          longBreakTime={longBreakTime}
          workTimeChanged={workTimeChanged}
          shortBreakTimeChanged={shortBreakTimeChanged}
          longBreakTimeChanged={longBreakTimeChanged} />}
      <div className="Footer" onClick={toggleOptions}>
        <h1 className="noselect">{optionsShown ? 'Close' : 'Options'}</h1>
      </div>
    </div>
  );
}

export default App;

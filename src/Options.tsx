import React from 'react';
import './Options.scss';

export enum Status {
  Working,
  ShortBreak,
  LongBreak
}

export function Options({ workTime, shortBreakTime, longBreakTime, workTimeChanged, shortBreakTimeChanged, longBreakTimeChanged }: { workTime: number, shortBreakTime: number, longBreakTime: number, workTimeChanged: any, shortBreakTimeChanged: any, longBreakTimeChanged: any }) {
  return (
    <div className="Options">
      <div className="Option">
        <p>Focus time (minutes)</p>
        <input type="number" value={workTime} onChange={workTimeChanged} />
      </div>
      <div className="Option">
        <p>Relax time (minutes)</p>
        <input type="number" value={shortBreakTime} onChange={shortBreakTimeChanged} />
      </div>
      <div className="Option">
        <p>Long break time (minutes)</p>
        <input type="number" value={longBreakTime} onChange={longBreakTimeChanged} />
      </div>
    </div >
  );
}

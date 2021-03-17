import React, { useEffect, useState } from 'react';
import './Pomodoro.scss';
import { useTimer } from 'react-timer-hook';

export enum Status {
  Working,
  ShortBreak,
  LongBreak
}

export function Pomodoro({ workTime, shortBreakTime, longBreakTime }: { workTime: number, shortBreakTime: number, longBreakTime: number }) {
  const initialStartTime = getTime(workTime);
  const [startTime, setStartTime] = useState(initialStartTime);
  const [isWorking, setIsWorking] = useState(true);
  const [workIntervalsCompleted, setWorkIntervalsCompleted] = useState(0);
  const [timerExpired, setTimerExpired] = useState(0);
  const {
    seconds, minutes, isRunning, pause, resume, restart,
  } = useTimer({ expiryTimestamp: initialStartTime, onExpire: () => onExpire() });
  const statusNames = new Map([
    [Status.Working, "Focus"],
    [Status.ShortBreak, "Relax"],
    [Status.LongBreak, "Long Break"]
  ]);

  useEffect(pause, [timerExpired])

  function onExpire() {
    let _isWorking = isWorking;
    let _workIntervalsCompleted = workIntervalsCompleted;
    if (_isWorking) {
      completeWorkInterval();
      _workIntervalsCompleted++;
    }
    _isWorking = !_isWorking;
    setIsWorking(_isWorking);
    updateTimer(_isWorking, _workIntervalsCompleted);
    setTimerExpired(timerExpired + 1);
  }

  function status(isWorking: boolean, workIntervalsCompleted: number): Status {
    return isWorking ? Status.Working : (workIntervalsCompleted % 4 === 0 ? Status.LongBreak : Status.ShortBreak);
  }

  function completeWorkInterval(): void {
    const w = workIntervalsCompleted + 1;
    setWorkIntervalsCompleted(w);
  }

  function updateTimer(isWorking: boolean, workIntervalsCompleted: number): void {
    const startTime = getTime(getStartTime(status(isWorking, workIntervalsCompleted)));
    setStartTime(startTime);
    restart(startTime);
  }

  function getTime(minutes: number): number {
    const date = new Date();
    date.setSeconds(date.getSeconds() + minutes * 60);
    return date.getTime();
  }

  function getStartTime(status: Status): number {
    switch (status) {
      case Status.Working:
        return workTime;
      case Status.ShortBreak:
        return shortBreakTime;
      case Status.LongBreak:
        return longBreakTime;
    }
  }

  function timer(minutes: number, seconds: number): string {
    return `${time(minutes)}:${time(seconds)}`;
  }

  function time(value: number): string {
    return value.toString().padStart(2, '0');
  }

  function statusName(status: Status): string {
    return statusNames.get(status) ?? "Unknown";
  }

  return (
    <div className="Pomodoro">
      <h1 className="Status">{statusName(status(isWorking, workIntervalsCompleted))}</h1>
      <h1 className="Timer">{timer(minutes, seconds)}</h1>
      {!isRunning && <button className="Button" onClick={resume}>{'Start'}</button>}
      {isRunning && <button className="Button" onClick={pause}>Pause</button>}
    </div>
  );
}

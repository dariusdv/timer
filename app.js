class Timer {
  constructor(durationInput, startTimer, pauseTimer) {
    this.durationInput = durationInput;
    this.startTimer = startTimer;
    this.pauseTimer = pauseTimer;

    this.startTimer.addEventListener('click', this.start);
  }
  start() {
    console.log('started');
  }
}

const durationInput = document.querySelector('#duration');
const startTimer = document.querySelector('#start');
const pauseTimer = document.querySelector('#pause');

const timer = new Timer(durationInput, startTimer, pauseTimer);
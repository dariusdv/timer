class Timer {
  constructor(durationInput, startTimer, pauseTimer) {
    this.durationInput = durationInput;
    this.startTimer = startTimer;
    this.pauseTimer = pauseTimer;

    this.startTimer.addEventListener('click', this.start);
    this.pauseTimer.addEventListener('click', this.pause);
  };
  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 1;
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  };

  set timeRemaining(time) {
    this.durationInput.value = time;
  };
}

const durationInput = document.querySelector('#duration');
const startTimer = document.querySelector('#start');
const pauseTimer = document.querySelector('#pause');

const timer = new Timer(durationInput, startTimer, pauseTimer);
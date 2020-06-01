const durationInput = document.querySelector('#duration');
const startTimer = document.querySelector('#start');
const pauseTimer = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startTimer, pauseTimer, {
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
	},
	onComplete() {
		console.log('complete');
	}
});

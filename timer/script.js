let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  displayTime();
}

function displayTime() {
  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  timerDisplay.textContent = formattedTime;
}

function pad(num) {
  return num < 10 ? `0${num}` : num;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

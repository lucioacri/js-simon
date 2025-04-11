const countdown = document.getElementById("countdown");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
let timeLeft = 10;

// Countdown
const countdownTimer = setInterval(() => {
  countdown.textContent = `Tempo rimasto: ${timeLeft} secondi`;
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(countdownTimer);
  }
}, 1000);

const countdown = document.getElementById("countdown");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
let timeLeft = 10;

// Arrays
const generatedNumbers = [];

// Countdown
const countdownTimer = setInterval(() => {
  countdown.textContent = `Tempo rimasto: ${timeLeft} secondi`;
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(countdownTimer);
    numbersList.classList.add("d-none");
    countdown.classList.add("d-none");
    answersForm.classList.replace("d-none", "d-block");
  }
}, 1000);
numbersList.cl;

// Random numbers
function randomNumbers(number) {
  while (generatedNumbers.length < number) {
    let num = Math.floor(Math.random() * 50 + 1);
    if (!generatedNumbers.includes(num)) {
      generatedNumbers.push(num);
    }
  }
  return generatedNumbers;
}
numbersList.textContent = `${randomNumbers(5)}`;

const countdown = document.getElementById("countdown");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const formControl = document.querySelectorAll(".form-control");
const finalMessage = document.getElementById("message");
let timeLeft = 3;
console.log(formControl);

// Arrays
const generatedNumbers = [];
let userNumbers = [];
const correctNumbers = [];

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
console.log(numbersList);

answersForm.addEventListener("submit", function (e) {
  e.preventDefault();
  for (let i = 0; i < formControl.length; i++) {
    userNumbers.push(parseInt(formControl[i].value));
  }
  console.log(userNumbers);
  for (let i = 0; i < userNumbers.length; i++) {
    if (generatedNumbers.includes(userNumbers[i])) {
      correctNumbers.push(userNumbers[i]);
    }
  }
  if (correctNumbers.length > 0) {
    finalMessage.textContent = `Hai indovinato ${
      correctNumbers.length
    } numeri: ${correctNumbers.join(" - ")}`;
  }
});

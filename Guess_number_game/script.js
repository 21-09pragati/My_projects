let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

document.getElementById("submit").addEventListener("click", function () {
  const guess = Number(document.getElementById("guessthenumber").value);
  const result= document.getElementById("result");
  //limitation upto 1-100
  if (!guess || guess < 1 || guess > 100) {
    guess.textContent = "🚫 Please enter a number between 1 and 100.";
    return;
  }

  attempts--;

  if (guess < randomNumber) {
    result.textContent = `📉 Too low! You have ${attempts} attempts left.`;
  } else if (guess > randomNumber) {
    result.textContent = `📈 Too high! You have ${attempts} attempts left.`;
  } else {
    result.textContent = `🎉 Correct! The number was ${randomNumber}. You guessed it!`;
    document.getElementById("submit").disabled = true;  // Disable the button after correct guess
  }

  if (attempts === 0 && guess !== randomNumber) {
    feedback.textContent = `❌ Game over! The number was ${randomNumber}.`;
    document.getElementById("submit").disabled = true;  // Disable button when attempts run out
  }
});

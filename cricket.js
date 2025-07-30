function compChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return 'Bat';
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return 'Ball';
  } else {
    return 'Stump';
  }
};

function getResult(compChoice, playerChoice) {
  if (compChoice === playerChoice) {
    return 'Match Has Been Drawn';
  } else if ((compChoice === 'Bat' && playerChoice === 'Ball') ||
    (compChoice === 'Ball' && playerChoice === 'Stump') ||
    (compChoice === 'Stump' && playerChoice === 'Bat')) {
    return 'Computer Wins';
  } else {
    return 'Player Wins';
  }
};

function showResult(compChoice, playerChoice, resultMsg) {
  alert(`You have chosen ${playerChoice}. Computer choice is ${compChoice} and ${resultMsg}`);
}

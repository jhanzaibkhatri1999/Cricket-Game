let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr ? JSON.parse(scoreStr) : {
    win: 0, loss: 0, Tie: 0,
  }

  score.displayScore = function () {
    return `Won: ${score.win}, Loss: ${score.loss}, Tie: ${score.Tie}`;
  };
  showResult();
}


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
    score.Tie++;
    return 'Match Has Been Drawn';
  } else if ((compChoice === 'Bat' && playerChoice === 'Ball') ||
    (compChoice === 'Ball' && playerChoice === 'Stump') ||
    (compChoice === 'Stump' && playerChoice === 'Bat')) {
    score.loss++;
    return 'Computer Wins';
  } else {
    score.win++;
    return 'Player Wins';
  }
};

function showResult(compChoice, playerChoice, resultMsg) {
  localStorage.setItem('Score', JSON.stringify(score));
  document.querySelector('#user').innerText = 
  playerChoice ? `You choose: ${playerChoice}` : '';
  document.querySelector('#comp').innerText = 
  compChoice ? `Computer choose: ${compChoice}` : '';
  document.querySelector('#result').innerText = 
  resultMsg ? `Result: ${resultMsg}` : '';
  document.querySelector('#score').innerText = `Score: ${score.displayScore()}`;
}

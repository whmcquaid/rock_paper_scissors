 let wins = 0;
let loses = 0;
let ties = 0;
let playerSelection;
let computerSelection = computerPlay();
let winner = gameDisplay();

function reset() {
  wins = 0;
  document.querySelector("#wins").innerHTML = `Wins: ${wins}`;
  loses = 0;
  document.querySelector("#loses").innerHTML = `Loses: ${loses}`;
  ties = 0;
  document.querySelector("#ties").innerHTML = `Ties: ${ties}`;
  document.querySelector("#roundResult").innerHTML = " ";
  return;
}

// Display Game Icons
function gameDisplay(){
    const container = document.querySelector('#container');
    const iconDiv = document.createElement('div');
    iconDiv.setAttribute('id', 'icons')
    iconDiv.classList.add("icons");
    const rockDiv = document.createElement('div');
    rockDiv.classList.add("icon");
    rockDiv.setAttribute('id', 'rock');
    rockDiv.textContent = '👊';

    const paperDiv = document.createElement('div');
    paperDiv.classList.add("icon");
    paperDiv.setAttribute('id', 'paper');
    paperDiv.textContent = '🖐';

    const scisDiv = document.createElement('div');
    scisDiv.classList.add("icon");
    scisDiv.setAttribute('id', 'scissors');
    scisDiv.textContent = '✌️';
   
    rockDiv.addEventListener('click', () => {
      rockDiv.classList.add('clicked');
      playerSelection = 1;
      winner = whoWon(playerSelection, computerSelection);
      computerSelection = computerPlay();
    });
    //make icons clickable
    paperDiv.addEventListener('click', () => {
      paperDiv.classList.add('clicked');
      playerSelection = 2;
      winner = whoWon(playerSelection, computerSelection);
      computerSelection = computerPlay();
    });

    scisDiv.addEventListener('click', () => {
      scisDiv.classList.add('clicked');
      playerSelection = 3;
      winner = whoWon(playerSelection, computerSelection);
      computerSelection = computerPlay();
    });

    rockDiv.addEventListener('transitionend', removeTransition);
    paperDiv.addEventListener('transitionend', removeTransition);
    scisDiv.addEventListener('transitionend', removeTransition);
    container.appendChild(iconDiv);
    iconDiv.appendChild(rockDiv);
    iconDiv.appendChild(paperDiv);
    iconDiv.appendChild(scisDiv);    
  }

  function win(result) {
    document.querySelector("#roundResult").innerHTML =`${result}`;
    document.querySelector('#wins').innerHTML = `Wins: ${wins}     `;
    if (wins == 5) {
        alert("YOU WIN! Congratulations!");
        reset()
    }
}
function lose(result) {
    document.querySelector("#roundResult").innerHTML = `${result}`;
    document.querySelector("#loses").innerHTML = `        Loses: ${loses}     `;
    if (loses == 5) {
        alert("YOU LOSE! Better luck next time.");
        reset();
    }
}

function whoWon(playerSelection, computerSelection){
    let result;
    if (playerSelection == 1 && computerSelection == 2){
      result = 'You Lose!   :   Paper Covers Rock';
      console.log(result);
      loses++;
      return lose(result);
    }
    else if (playerSelection == 1 && computerSelection == 3){
      result = 'You Win!   :   Rock Crushes Scissors';
      console.log(result);
      wins++;
      return win(result);
    }
    else if (playerSelection == 2 && computerSelection == 1){
      result = 'You Win!   :   Paper Covers Rock';
      console.log(result);
      wins++;
      return win(result);
    }
    else if (playerSelection == 2 && computerSelection == 3){
      result = 'You Lose!   :   Scissors Cut Paper';
      console.log(result);
      loses++;
      return lose(result);
    }
    else if (playerSelection == 3 && computerSelection == 1){
      result = 'You Lose!   :   Rock Crushes Scissors';
      console.log(result);
      loses++;
      return lose(result);
    }
    else if (playerSelection == 3 && computerSelection == 2){
      result = 'You Win!   :   Scissors Cut Paper';
      console.log(result);
      wins++;
      return win(result);
    }
    else {
    result = 'Tie Game';
    ties++;
    console.log(result);
    document.querySelector("#roundResult").innerHTML = `It's a tie!`;
                    document.querySelector("#ties").innerHTML = `       Ties: ${ties}     `;
    }
  }
    
function computerPlay() {
let str, number;
let getRandom = Math.random();
if (getRandom >= 0.0 && getRandom <= 0.33333) {
  str = 'rock'; number = 1;
}
if (getRandom >= 0.33334 && getRandom <= 0.66666) {
  str = 'paper'; number = 2;
}
if (getRandom >= 0.66667 && getRandom <= 1.0) {
str = 'scissors'; number = 3;
}
  return number;
} 

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('clicked');
}
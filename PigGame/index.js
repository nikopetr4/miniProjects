'use strict';

const btnRoll = document.querySelector(".roll");
const btnNew = document.querySelector(".new-game");
const btnHold = document.querySelector('.hold');
const player1 = document.querySelector('.score--1');
const player2 = document.querySelector('.score--2');
const dice = document.querySelector('.image');
const currentScore1 = document.querySelector('.current--1');
const currentScore2 = document.querySelector('.current--2');
const leftContent = document.querySelector('.content--1');
const rightContent = document.querySelector('.content--2');
const winningScore = 100;
let activePlayer = 1;
let currentScore = 0;
let playerScore = 0;
let scores = [0,0];
leftContent.classList.toggle('player--active');


const changePlayer = function() {        
    currentScore = 0;
    document.querySelector(`.current--${activePlayer}`).textContent = 0;
    activePlayer = (activePlayer === 1) ? 2 : 1;  
    leftContent.classList.toggle('player--active');
    rightContent.classList.toggle('player--active');
}



const resetGame = function() {
    currentScore = 0;
    player1.textContent = 0;
    player2.textContent = 0;
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
    dice.classList.add('hidden');
    leftContent.classList.add('player--active');
    leftContent.classList.remove('player--winner');
    rightContent.classList.remove('player--active');
    rightContent.classList.remove('player--winner');
    document.querySelector('.play--2').textContent = 'PLAYER 2';
    document.querySelector('.play--1').textContent = 'PLAYER 1';  
    document.querySelector('.play--1').style.color = 'rgb(0,0,0,0.7)';
    document.querySelector('.play--2').style.color = 'rgb(0,0,0,0.7)';
}

btnNew.addEventListener('click', function(){
    resetGame();
})

btnRoll.addEventListener('click', function(){
    const randomNumber = Math.ceil(Math.random() * 6);
    const source = "./dice-" + randomNumber + ".png";
    dice.classList.remove('hidden');
    dice.src = source;

    if(randomNumber !== 1){
    currentScore += randomNumber;
    document.querySelector(`.current--${activePlayer}`).textContent = currentScore;
    } else 
    {changePlayer()};
})
    

btnHold.addEventListener('click',function(){
    scores[activePlayer - 1] += currentScore;
    document.querySelector('.score--' + activePlayer).textContent = scores[activePlayer - 1];
    
    if(scores[activePlayer - 1] >= winningScore) {
        leftContent.classList.remove('player--active');
        rightContent.classList.remove('player--active');
        document.querySelector('.play--' + activePlayer).textContent = 'Winner!';
        document.querySelector('.play--' + activePlayer).style.color = 'purple';
        document.querySelector('.content--' + activePlayer).classList.add('player--winner');
        dice.classList.add('hidden');
     } else {changePlayer();}
})




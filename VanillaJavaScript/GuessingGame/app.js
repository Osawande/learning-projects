/*
-PLayer must guess number between minimum and maximum 
-Player gets a specified amount of guesses 
-Notify player of guesses remaining 
-Notify player of the correct answer if player loses
-Allow player to play again 
*/

//Starting values 

let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesleft = 3;

//UI Elements 

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');
let guess;
//Assign elements to UI 

minNum.textContent = min;
maxNum.textContent = max;

//Listeners 

game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

guessBtn.addEventListener('click',function(){
    guess = parseInt(guessInput.value);
    console.log('clicked')
    //Validate input
    if( isNaN(guess) || guess < minNum || guess > maxNum){
        setMessage(`Please enter a number withing this range ${min} and ${max}`,'red');
    }

    //Check if won 
    if (guess === winningNum){
        gameOver(true, `${winningNum} is correct YOU WIN!`);
    } else {
        guessesleft -= 1;

        if (guessesleft === 0 ){
            gameOver(false, `Game over you lost.
                          The correct number was
                          ${winningNum}`);
            //game continue
            
        } else { 
            guessInput.style.borderColor = 'red';

            //clear input 
            guessInput.value = "";
            //game continues 
            setMessage(`Your guess ${guess} is incorrect you have ${guessesleft} remaining`,'red');

            guessInput.value = "";

        }
    }
});

function gameOver (won, msg){
    let color;

     won === true ? color = 'green' : color = 'red';

    //disable input
    guessInput.disabled = true;
    //set border color
    guessInput.style.borderColor = color;
    //set text color 
    message.style.color = color;
    //set message 
    setMessage(msg);

    guessBtn.value = "Play Again";
    guessBtn.className += "play-again";
}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let randomNumber = Math.floor(Math.random() * 100) + 1;

function guess() {
    const input = document.getElementById('guess').value;
    const result = document.getElementById('msg');

    if (!input) {
        alert('Please enter a guess!');
    } 
    else if (isNaN(input)) {
        alert('Please enter a valid number!');
    }
    else {
        const userGuess = Number(input);
        if (userGuess === randomNumber) {
            result.textContent = 'Congratulations! You guessed it right!';
            result.style.color = 'green';
        }
        else if(userGuess>randomNumber && userGuess-randomNumber<9){
            result.textContent = 'Close, but still low';
            result.style.color = 'red';
        } 
        else if(userGuess<randomNumber && randomNumber-userGuess<9){
            result.textContent = 'Close, but still high';
            result.style.color = 'red';
        }
        else if (userGuess < randomNumber) {
            result.textContent = 'Too low! Try again.';
            result.style.color = 'red';
        } else {
            result.textContent = 'Too high! Try again.';
            result.style.color = 'red';
        }
    }
}
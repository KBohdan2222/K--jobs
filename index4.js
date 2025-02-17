function guessNumberGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let userGuess;
    do { 
        userGuess = parseInt(prompt('Введіть число від 1 до 100:'));
        if (userGuess < randomNumber) {
            alert('Загадане число більше');
        } else if (userGuess > randomNumber) {
            alert('Загадане число менше');
        } else {
            alert('Вітаємо! Ви вгадали число!');
        }
    } while (userGuess !== randomNumber);
}
guessNumberGame();
function flipCoin() {
    let userChoice = prompt("Choose heads or tails:").toLowerCase();
    let randomNumber = Math.floor(Math.random() * 2);
    let computerChoice = (randomNumber === 0) ? "heads" : "tails";

    if (userChoice === computerChoice) {
        alert(`You guessed right! The coin flip landed on ${userChoice}`);
    } else {
        alert(`Sorry, the coin flip landed on ${computerChoice}`);
    }
}

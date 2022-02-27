/**
 * 1. Write the game logic in this function
 *    It should be passed two choices as arguments
 *    and return the winner (or "draw")
 *    e.g. `game("paper", "rock")` returns "player"
 */
function game(playerChoice, computerChoice) {
  // if the playerChoice and computer are the same that is a draw
  if (playerChoice === computerChoice) {
    return "Draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "scissors" && computerChoice === "rock") ||
    (playerChoice === "paper" && computerChoice === "scissors")
  ) {
    return "Computer wins!";
  } else {
    return "Player wins!";
  }
  // if player has rock and computer has paper - player loses
  // if plater has rock and computer has scissors - player wins
  // if player has scissors and computer has paper - player win
  // if player has scissors and computer has rock - player loses
  // if player has paper and computer has rock - player wins
  // if player has paper and computer has scissors - player loses
}
console.log(game("paper", "paper"));
/**
 * 2. This function should pick the computer's choice
 *    It should randomly return "rock", "paper" or "scissors"
 */
function randomChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "paper";
  } else if (randomNumber === 1) {
    return "scissors";
  } else {
    return "rock";
  }
}
// generate random number
// if 1 - scissor
// if 2 - rock
// if 0 - paper

console.log(randomChoice());

const form = document.querySelector(".rps-radio");
const input = document.querySelectorAll("input");

// console.dir(input);

form.addEventListener("input", (event) => {
  let answer = event.target.value;
  let computerChoice = randomChoice();
  let stringAns = game(answer, computerChoice);
  //  console.dir(output);
  return (document.querySelector(
    "output"
  ).innerHTML = `${stringAns} the computers choice was ${computerChoice}.`);

  //  document.documentElement.innerHTML = "<pre>" +
  //        document.documentElement.innerHTML.replace(/</g,"&lt;") +
  //           "</pre>";
});

// console.dir(form);

/**
 *
 * 3. a) Listen for the "input" event on the <form>.
 *       This triggers whenever the user changes the value of an input.
 *    b) Get the value of the input the event targetted.
 *       E.g. for <input type="radio" value="rock"> this will be "rock"
 *    c) Get the computer's random choice, then calculate the winner.
 *       Update the <output> with the result.
 */

/**
 * 4. Bonus stretch goal: allow the player to choose their name.
 *    Add a text input to the page for entering a name.
 *    Listen for the "input" event on this and update a `name` variable.
 *    Use this `name` variable instead of "player" in the game code.
 */

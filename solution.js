/**
 * 1. Write the game logic in this function
 *    It should be passed two choices as arguments
 *    and return the winner (or "draw")
 *    e.g. `game("paper", "rock")` returns "player"
 */
function game(player, computer) {
  const loses = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock",
  };
  if (player === loses[computer]) return "player";
  if (computer === loses[player]) return "computer";
  return "draw";
}

/**
 * 2. This function should pick the computer's choice
 *    It should randomly return "rock", "paper" or "scissors"
 */
function randomChoice() {
  const options = ["rock", "paper", "scissors"];
  const random0To2 = Math.floor(Math.random() * 3);
  console.log({ random0To2 });
  return options[random0To2];
}

/**
 * 3. a) Listen for the "input" event on the <form>.
 *       This triggers whenever the user changes the value of an input.
 *    b) Get the value of the input the event targetted.
 *       E.g. for <input type="radio" value="rock"> this will be "rock"
 *    c) Get the computer's random choice, then calculate the winner.
 *       Update the <output> with the result.
 */

const form = document.querySelector("form");
const output = document.querySelector("output");

form.addEventListener("input", (event) => {
  const player = event.target.value;
  const computer = randomChoice();
  console.log({ player, computer });
  const result = game(player, computer);
  if (result === "draw") {
    output.innerHTML = "A draw!";
  } else {
    output.innerHTML = `${result} wins!`;
  }
});

(
    function() 
    {
    // An arrow function expression has a shorter syntax compared to function expressions and lexically binds the this value
    const numbers = () => 
    {
      // would be the number of possible options starting from 3
      let rand = Math.floor(Math.random() * 3);
      return rand;
    };
    const computerPlay = () => 
    {
      let choise = ["rock", "paper", "scissors"];
      return choise[numbers()];
    };
    const changeString = str => 
    {
      //change sting
      return str.trim().toLowerCase();
    };
    const winnerCheck = (changePlayer, computerSelection) => 
    {
      if (changePlayer === computerSelection) 
      {
        return console.log("Draw,try again");
      }
      if (computerSelection === "rock") 
      {
        // used recursion to find a winner
        switch (changePlayer) 
        {
          case "paper":
            playerScore++;
            return console.log(`You win: ${changePlayer} beats ${computerSelection}`);
            break;
          case "scissors":
            computerScore++;
            return console.log(`You lose: ${computerSelection} beats ${changePlayer}`);
            break;
        }
      } 
        else if (computerSelection === "paper")
       {
        switch (changePlayer)
         {
          case "scissors":
            playerScore++;
            return console.log(`You win: ${changePlayer} beats ${computerSelection}`);
            break;
          case "rock":
            computerScore++;
            return console.log(
              `You lose: ${computerSelection} beats ${changePlayer}`
            );
            break;
        }
      } else {
        switch (changePlayer) 
        {
          case "rock":
            playerScore++;
            return console.log(`You win: ${changePlayer} beats ${computerSelection}`);
            break;
          case "paper":
            computerScore++;
            return console.log(`You lose: ${computerSelection} beats ${changePlayer}`);
            break;
        }
      }
    };
    let playRounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    const playRound = () => 
    {
      // The prompt() method displays a dialog box that prompts the user for input
      let playerSelection = prompt("Rock, paper or scissors?");
      if (!playerSelection) 
      {
        playRounds++
        return alert("Write rock, paper or scissors");
      }
      // The some() method checks if any array elements pass a test
      let changePlayer = changeString(playerSelection);
      if (!["rock", "paper", "scissors"].some(el => el === changePlayer)) 
      {
        playRounds++
        return alert(`${changePlayer} Please write only rock, paper or scissors`);
      }
      let computerSelection = computerPlay();
      winnerCheck(changePlayer, computerSelection);
    };
    let playStatus = "On";
    const checkStatus = () => 
    {
      if (computerScore === playerScore) {
        let morePlay = prompt("We are 50-50, do you want to play again?");
        if (!morePlay) 
        {
          playStatus = "Done";
          return;
        }
        morePlay = changeString(morePlay);
        if (morePlay !== "yes") {
          playStatus = "Done";
          return console.log("Draw");
        }
        playStatus = "On";
        playRounds = 5;
        return;
      }
      playStatus = "Done";
    };
    const game = () => 
    {
      for (let i = 0; i < playRounds; i++) 
      {
        playRound();
      }
      checkStatus();
    };
    while (playStatus === "On") 
    {
      game();
    }
    if (computerScore > playerScore) 
    {
      console.log(`You lost ${playerScore}:${computerScore}`);
    } 
    else if (playerScore > computerScore) 
    {
      console.log(`You won ${playerScore}:${computerScore}`);
    }
  }
  )
  ();

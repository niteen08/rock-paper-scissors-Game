let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");
const totalTurn = document.querySelector("#totalTurn")
const draw = document.querySelector("#draw");
const userPoint = document.querySelector("#userScore");
const compPoint = document.querySelector("#compScore");
 
 
const genCompChoice = () =>{
   let options = ["rock", "paper", "scissors"];
   idx = Math.floor(Math.random() * 3);
   return options[idx];
}

genCompChoice();


// draw game  function
let pointDraw = 0;
const drawGame = () =>{
    console.log("game was draw"); 
    msg.innerText = "Game Was Draw. Play Again!";
    msg.style.backgroundColor = "#023047";
    pointDraw++;
    draw.innerText = pointDraw;
}

const showWinner = (userWin,userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userPoint.innerText = userScore ;
        console.log("you win");
        msg.innerText = `You Win. Your ${userChoice} Beats ${compChoice}` ;
        msg.style.backgroundColor = "#38b000"; // green
    }
    else{
        compScore++;
        compPoint.innerText = compScore ;
        console.log("comp win");
        msg.innerText = `You Lose. ${compChoice} Beats Your ${userChoice} `;
        msg.style.backgroundColor = "#d62828"; //red
    }

}

const playGame = (userChoice) =>{
    console.log("you choose =",userChoice);
    // genrate computer choise for call the function 
    let compChoice = genCompChoice();
    console.log("comp choose =",compChoice);

    //draw game

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors paper
           userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }


};

let turn = 0;
choices.forEach(choice => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
            turn++;
            totalTurn.innerText = turn;
        });
    });



 

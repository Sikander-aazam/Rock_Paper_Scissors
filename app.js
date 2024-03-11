let userScore = 0;
let compScore = 0;

let winner = document.querySelector("#msg")
let userScorepara = document.querySelector("#your_score")
let compScorepara = document.querySelector("#comp_score")
let choices = document.querySelectorAll(".choice");

const genCompChoice = ()=>{
    const option = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3)
    return option[randIdx]
}

const drawGame = () => {
    winner.innerText = "game was draw"
    winner.style.backgroundColor = "white"
    winner.style.color = "black"
}

const showWinner = (userWin, userChoice, compchoice) =>{
    if(userWin){
        userScore++
        userScorepara.innerText = userScore
        winner.innerText = `You Win! Your ${userChoice} beats ${compchoice}`
        winner.style.backgroundColor = "#432121"
        winner.style.color = "#35ff00"
    }else{
        compScore++
        compScorepara.innerText = compScore
        winner.innerText = `You lose. ${compchoice} beats Your ${userChoice}`
        winner.style.backgroundColor = "#cd0000"
        winner.style.color = "#9cffff"
    }
}

const playGame = (userChoice)=>{
   const compchoice = genCompChoice()

   if(userChoice === compchoice){
    //drawgame
    drawGame()
   }else {
    let userWin = true
    if(userChoice === "rock"){
        //scissors, paper
        userWin = compchoice === "paper"? false : true
    }else if(userChoice === "paper"){
        //rock, scissors
        userWin = compchoice === "scissors" ? false : true
    }else{
        userWin = compchoice === "rock" ? false : true
    }
    showWinner(userWin, userChoice, compchoice)
   }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });

});
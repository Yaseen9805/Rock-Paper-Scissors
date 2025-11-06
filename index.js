const choices=["rock","paper","scissors"];
const playerDisplay=document.getElementById("playerDisplay")
const computerDisplay=document.getElementById("computerDisplay")
const resultDisplay=document.getElementById("resultDisplay")

function playGame(playerchoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    console.log(computerChoice)
    let result="";
    if(playerchoice===computerChoice){
        result="IT'S A TIE";
    }
    else{
        switch(playerchoice){
            case "rock":
               result=(computerChoice==="scissors")?"YOU WIN":"YOU  LOSE";
               break
            case "paper":
               result=(computerChoice==="rock")?"YOU WIN":"YOU LOSE";
                break
            case "scissors":
                result=(computerChoice==="paper")?"YOU WIN":"YOU LOSE";
                break        
        }
    }
    playerDisplay.textContent=`PLAYER:${playerchoice}`
    computerDisplay.textContent=`COMPUTER:${computerChoice}`
    resultDisplay.textContent=result
    resultDisplay.classList.remove("greenText","redText")
    switch(result){
        case "YOU WIN":
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE":
            resultDisplay.classList.add("redText");
            break
    }
}
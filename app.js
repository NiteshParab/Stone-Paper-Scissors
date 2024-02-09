let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
let userScore=document.querySelector(".user-score");
let compScore=document.querySelector(".comp-score");


for(let choice of choices){
    choice.addEventListener('click',()=>{
        let userChoice=choice.getAttribute("id");
        
        let compChoice=getCompChoice();
        
        if(userChoice===compChoice){
            msg.innerText="Game Draw! Play Again...";
        }
        
        else if(userChoice!==compChoice){

           let userWin=true;

            if(userChoice==="stone"){
                //paper,scissor
                userWin=(compChoice=="scissor") ? true:false;
                showWinner(userWin,userChoice,compChoice);
                showScore(userWin);
            }
    
            else if(userChoice==="paper"){
                //stone,scissor
                userWin=(compChoice=="stone") ? true:false;
                showWinner(userWin,userChoice,compChoice);
                showScore(userWin);
            }
    
            else if(userChoice==="scissor"){
                //stone,paper
                userWin=(compChoice=="paper") ? true:false;
                showWinner(userWin,userChoice,compChoice);
                showScore(userWin);
            }

            else{
                msg.innerText("play again");
            }

            
        }

    })
}

const getCompChoice=()=>{
    const choiceArray=["stone","paper","scissor"];

    return choiceArray[Math.floor(Math.random()*3)];

}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        msg.innerText=`You win! your ${userChoice} beats computer ${compChoice}`;
    }
    else{
         msg.innerText=`You lose! Computer ${compChoice} beats your ${userChoice}`;
    }
};

let initialUserScore=0;
let initialCompScore=0;

const showScore=(userWin)=>{
    if(userWin==true){
        initialUserScore++;
        userScore.innerText=initialUserScore;
    }
    else{
        initialCompScore++
        compScore.innerText=initialCompScore;
    }
};


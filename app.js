let printScoreUser = document.querySelector("#user-score");
let printScoreComputer = document.querySelector("#comp-score");
let msg = document.querySelector(".msg");
let compscore = 0;
let userscore = 0;

 
let scoreboard=(flag)=>{
    if(flag) {
        userscore+=1;
        printScoreUser.innerText = userscore;
        msg.innerText = "You win";
    }
    else if(!flag) {
        compscore+=1;
        printScoreComputer.innerText = compscore;
        msg.innerText="Computer win";
    }
    
}

let compmove = ()=>{
    let opt = ["rock","paper","scissor"];
    let idx= Math.floor(Math.random()*3);
    return opt[idx];
}

let game = (userchoice,compschoice)=>{
    if(userchoice==compschoice){
        console.log("Draw");
        msg.innerText="Draw";
    }

    else{
        let usrwin = true;
        if(userchoice=="rock"){
            if(compschoice=="paper") usrwin=false;
            // else usrwin=true;
        }

        else if(userchoice=="paper"){
            if(compschoice=="scissor") usrwin=false;
            // else usrwin=true;
        }
        else if(userchoice=="scissor"){
            if(compschoice=="rock") usrwin=false;
            // else usrwin=true;
        }
        console.log(usrwin);
        scoreboard(usrwin)
    }
} 

const choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log("user",userchoice);
        let compschoice= compmove();
        console.log("comp",compschoice);
        game(userchoice,compschoice)
        

        
    });
});

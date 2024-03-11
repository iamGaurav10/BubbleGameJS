var timer = 60;
var hitrn = 0;
var score = 0;

function generateRandomNumber(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#number").innerHTML = hitrn;
    
}

function genrateBubbles(){
    var clutter = "";
    for(var i=1;i<=119;i++){
        const num = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${num}</div>`
        document.querySelector(".lobby").innerHTML = clutter;
    }

}

function runTimmer(){
    var timerInterval = setInterval(function(){
        
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;  
        }
        else{
            clearInterval(timerInterval)
            alert(`Congratulations! You have scored ${score} points. Please reload the page to startover.`)
            setScoreToZero()
        }
    },1000)
}

document.querySelector(".lobby").addEventListener("click",(e)=>{
    
    var hitVal = Number(e.target.textContent)
    if(hitVal === hitrn){
        scoreIncraser()
        generateRandomNumber()
        genrateBubbles()
    }
    else{
        score-=5
        document.querySelector("#score").textContent = score;
        genrateBubbles()
    }
    
})


function scoreIncraser(){
    score += 10;
    document.querySelector("#score").textContent = score;
}

function setScoreToZero(){
    score = 0
    document.querySelector("#score").textContent = score;
}

document.querySelector("#start").addEventListener("click",()=>{
    runTimmer()
})




generateRandomNumber();
genrateBubbles();

// Happy to commit second tiem just for fun !!
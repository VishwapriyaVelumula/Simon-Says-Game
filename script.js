let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let btns=['btn1', 'btn2', 'btn3', 'btn4'];

let h3=document.querySelector("h3");

document.addEventListener("keypress", function() {
    if(started==false){
        console.log("game started");
        started=true;

        levelup();
    }
})

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 100);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 100);
}

function levelup() {
    level++;
    h3.innerText=`level ${level}`;

    let randIndex = Math.floor(Math.random() * 3);
    let randcolor = btns[randIndex];
    let randbtn = document.querySelector('.${randcolor}')
    gameSeq.push(randcolor);
    btnflash(randbtn);
}

function checkAns() {
    let idx = level-1;
    if(userSeq[idx]!=gameSeq[idx]){
        level=0;
        started=false;
        gameSeq=[];
        userSeq=[];
        h3.innerText=`Game Over!! Your Score is ${level}`;
    }
}

function btnPress() {
    let btn=this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
}

let allBtns=document.querySelectorAll(".btn");
for(Btn of allBtns){
    Btn.addEventListener("click", btnPress);
}
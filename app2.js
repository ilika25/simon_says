let userSeq= [];
let gameSeq= [];
let started= false;
let level=0;
let h2= document.querySelector("h2");
let btns= ["one","two","three","four"]; 

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started= true; 
    }
    levelup();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;
    let idx= Math.floor(Math.random()*3);
    let colr= btns[idx];
    console.log(`${idx}, ${colr}`);
    let randbtn= document.querySelector(`.${colr}`);
    let seqbtn= randbtn.getAttribute("id");
    gameSeq.push(seqbtn);
    console.log(gameSeq);
    btnFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,250);
        }
    }
    else{
        h2.innerHTML =`Game Over! Your score was <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnpress(){
    console.log(this);
    let btn= this;
    btnFlash(btn);
    usercolor= btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}
let allbtns= document.querySelectorAll(".box");
for(let btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
userSeq= [];
gameSeq= [];
started= false;
level=0;
}
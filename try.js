var interval, clicked=false;
   

var play=document.getElementById("play");
play.addEventListener('click', delay);


function delay(){
    if(clicked==false){
        clicked=true;
        interval=setInterval(runWatch, 1000);
    }
}

function runWatch(){
    
    var timePart, curr, next, len=5;
    curr=next=0;

    timePart=document.getElementsByClassName("time-part");

    curr=parseInt(timePart[len-1].innerText)+1;
    if(curr==10) {curr=0;next=1;}
    timePart[len-1].innerText=curr;

    curr=parseInt(timePart[len-2].innerText)+next;
    next=0;
    if(curr==6) {curr=0;next=1;}
    timePart[len-2].innerText=curr;

    curr=parseInt(timePart[len-3].innerText)+next;
    next=0;
    if(curr==10) {curr=0;next=1;}
    timePart[len-3].innerText=curr;

    curr=parseInt(timePart[len-4].innerText)+next;
    next=0;
    if(curr==6) {curr=0;next=1;}
    timePart[len-4].innerText=curr;

    curr=parseInt(timePart[len-5].innerText)+next;
    timePart[len-5].innerText=curr;
}

//-----------------------------------------------------------------------------------------//

var pause = document.getElementById("pause");
pause.addEventListener("click", makePause);

function makePause(){
    clearInterval(interval);
    clicked=false;
}

//-----------------------------------------------------------------------------------------//

var reset = document.getElementById("reset");
reset.addEventListener("click", makeReset);

function makeReset(){
    clicked=false;
    var timePart = document.getElementsByClassName("time-part");
    for(var i=0; i<5; i++){
        timePart[i].innerText='0';
    }
}

reset.addEventListener("click", makePause);
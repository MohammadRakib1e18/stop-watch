// A simple Stop watch

var interval, clicked=false;
var pauseDuration, startTime, pauseTime;
pauseDuration=0;
startTime=pauseTime=null;
   
//-----------------------------------Start section----------------------------------------//

var start=document.getElementById("start");
start.addEventListener('click', startClick);

function startClick(){
    if(clicked==false){
        clicked=true;
        if(startTime==null){
            startTime=new Date();
    
        }
        if(pauseTime!=null){
            pauseDuration += (new Date() - pauseTime); 
        }
        interval=setInterval(runWatch, 0);
    }
}

function runWatch(){
    
    var currTime=new Date();
    var currDuration = new Date(currTime-startTime-pauseDuration);

    var h=currDuration.getUTCHours();
    var m=currDuration.getUTCMinutes();
    var s=currDuration.getUTCSeconds();
    var ms=currDuration.getUTCMilliseconds();

    timePart=document.getElementsByClassName("time-part");
    var output="";

    (h>9)?(output=h):(output="0"+h); timePart[0].innerText=output;
    (m>9)?(output=m):(output="0"+m); timePart[1].innerText=output;
    (s>9)?(output=s):(output="0"+s); timePart[2].innerText=output;
    (ms>99)?(output=ms):((ms>9)?(output="0"+ms):(output="00"+ms));
    timePart[3].innerText=output;
}

//-----------------------------------Pause section----------------------------------------//

var pause = document.getElementById("pause");
pause.addEventListener("click", makePause);

function makePause(){
    if(startTime!=null) pauseTime=new Date();
    clearInterval(interval);
    clicked=false;
}

//------------------------------------Reset section--------------------------------------//

var reset = document.getElementById("reset");
reset.addEventListener("click", makeReset);

function makeReset(){
    
    clicked=false;
    var timePart = document.getElementsByClassName("time-part");
    timePart[0].innerText="00";
    timePart[1].innerText="00";
    timePart[2].innerText="00";
    timePart[3].innerText="000";

    clearInterval(interval);

    pauseDuration=0;
    startTime=pauseTime=null;
}

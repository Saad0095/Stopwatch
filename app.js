var interval;

var minutes = "0" + 0
var seconds = "0" + 0
var miliseconds = "0" + 0

var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmilisec = document.getElementById('milisec')

function start(){
interval = setInterval(function(){
     miliseconds++
     getmilisec.innerHTML = "0" + miliseconds
     if (miliseconds >= 10){
        getmilisec.innerHTML = miliseconds
     }

     if (miliseconds == 100){
        seconds++
        getsec.innerHTML = "0" + seconds
        if (seconds >= 10){
            getsec.innerHTML = seconds
         }
        miliseconds = "0" + 0
     }

     if (seconds == 60){
        minutes++
        getmin.innerHTML = "0" + minutes
        if (minutes >= 10){
            getmin.innerHTML = minutes
         }
        seconds = "0" + 0
     }
},10)

document.getElementById('startbtn').disabled = true
}


function stop(){
    clearInterval(interval)
    document.getElementById('startbtn').disabled = false
}

function reset(){
    clearInterval(interval)
    seconds = "0" + 0
    miliseconds = "0" + 0
    minutes = "0" + 0
    getsec.innerHTML = "0" + 0
    getmilisec.innerHTML = "0" + 0
    getmin.innerHTML = "0" + 0
    document.getElementById('startbtn').disabled = false
}
let interval;

let minutes = 0
let seconds = 0
let miliseconds = 0

let getmin = document.getElementById('min')
let getsec = document.getElementById('sec')
let getmilisec = document.getElementById('milisec')
let resetButton = document.getElementById('resetbtn')

getsec.innerHTML = "00"
getmilisec.innerHTML = "00"
getmin.innerHTML = "00"

function start() {
   interval = setInterval(updateTimer, 10);
   document.getElementById('startbtn').disabled = true;
}

function updateTimer() {
   miliseconds++
   getmilisec.innerHTML = "0" + miliseconds
   if (miliseconds >= 10) {
      getmilisec.innerHTML = miliseconds
   }

   if (miliseconds == 100) {
      seconds++
      getsec.innerHTML = "0" + seconds
      if (seconds >= 10) {
         getsec.innerHTML = seconds
      }
      miliseconds = 0
   }

   if (seconds == 60) {
      minutes++
      getmin.innerHTML = "0" + minutes
      if (minutes >= 10) {
         getmin.innerHTML = minutes
      }
      seconds = 0
   }
}


function stop() {
   clearInterval(interval)
   document.getElementById('startbtn').disabled = false
   resetButton.classList.remove('hide')


}

function reset() {
   clearInterval(interval)
   resetButton.classList.add('hide')
   seconds = 0
   miliseconds = 0
   minutes = 0
   getsec.innerHTML = "00"
   getmilisec.innerHTML = "00"
   getmin.innerHTML = "00"
   document.getElementById('startbtn').disabled = false
}
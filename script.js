var time = 60;
var timer = document.querySelector('#time');

function VerifyTime(){
  if(time<=0){
    clearInterval(myTimer);
    timer.innerHTML = "Finalizado!";
  }else{
    time--;
    timer.innerHTML = time;
  }
}

const myTimer = setInterval(VerifyTime, '1000');

function GenerateRandomNumber(limit){
  return Math.floor(Math.random() * limit);
}

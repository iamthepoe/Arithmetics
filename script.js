var time = 60;
const timer = document.querySelector('#time');
const account = document.querySelector('#account');
const operations = ["+", "-", "*", "/"];

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

function ChooseOperation(){
  return operations[GenerateRandomNumber(operations.length)];
}

account.innerHTML = `${ChooseOperation()}`


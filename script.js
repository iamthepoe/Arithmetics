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

function CreateNewAccount(){
  let x = GenerateRandomNumber(1000);
  let y = GenerateRandomNumber(1000);

  if(ChooseOperation()=="+"){
    account.innerHTML = `${x} + ${y}`
    return x + y;
  }else if(ChooseOperation()=="-"){
    account.innerHTML = `${x} - ${y}`
    return x - y;
  }else if(ChooseOperation()=="*"){
    account.innerHTML = `${x} * ${y}`
    return x * y;
  }else{
    account.innerHTML = `${x} / ${y}`
    return x / y;
  }
}

CreateNewAccount();

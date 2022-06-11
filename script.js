var time = 60;
var points = 0;
var result = 0;
const button = document.querySelector('#sendBtn');
const pointsInput = document.querySelector('#points');
const timer = document.querySelector('#time');
const account = document.querySelector('#account');
const answer = document.querySelector('#answer');
const operations = ["+", "-", "*"];

function VerifyTime(){
  if(time<=0){
    clearInterval(myTimer);
    timer.innerHTML = "Finalizado!";
    answer.placeholder = "Fim de tempo!";
    account.innerHTML = `<h3>Sua pontuação foi de:</h3><br><p style="color:#73ff00;">${points}</p>`;
    answer.readOnly = true;
    button.hidden = false;
    pointsInput.value = points;
    
    document.getElementsByTagName('button')[0].hidden = false;
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
  }else{
    account.innerHTML = `${x} * ${y}`
    return x * y;
  }
}

result = CreateNewAccount();

answer.addEventListener('input', ()=>{
  if(answer.value==result){
    result = CreateNewAccount();
    points++;
    answer.value = '';
  }
});

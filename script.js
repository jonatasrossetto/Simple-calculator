"use strict";
let btnStatus = document.querySelector(".status");
let btnClearAll = document.querySelector(".clearAll");
let btnClearEntry = document.querySelector(".clearEntry");
let btnAdd = document.querySelector(".add");
let btnMultiply = document.querySelector(".multiply");
let btnDivide = document.querySelector(".divide");
let btnSubtract = document.querySelector(".subtract");
let btnCalculate = document.querySelector(".calculate");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
let btn0 = document.querySelector(".btn0");
let visor = document.getElementById("visor");
let visorStr = "0";
visor.textContent = visorStr;
let nA = 0;
let nB = 0;
let operation = "";
let calculateOk = false;

function pressOperation(pressedOperation){
  // console.log('btn '+pressedOperation);
  operation = pressedOperation;
  if (nA==0){ 
    nA = Number(visorStr);
    visorStr = "0";
  }
  // console.log(`number A: ${nA}`);
  // console.log(`number B: ${nB}`);
  // console.log(`operation: ${operation}`);
  visor.textContent = visorStr;
}
btnAdd.addEventListener("click", function () {pressOperation('add')});
btnMultiply.addEventListener("click", function () {pressOperation('multiply')});
btnSubtract.addEventListener("click", function () {pressOperation('subtract')});
btnDivide.addEventListener("click", function () {pressOperation('divide')});
btnClearAll.addEventListener("click",function(){clearAll()});
btnClearEntry.addEventListener("click",function(){clearEntry()});
btnStatus.addEventListener("click", function(){DisplayInternalStatus()});


btnCalculate.addEventListener("click", function () {
  // console.log("calculate");
  nB = Number(visorStr);
  // console.log(`number A: ${nA}`);
  // console.log(`number B: ${nB}`);
  // console.log(`operation: ${operation}`);
  if (operation==="add") {
    visorStr = nA+nB;
    // console.log(`result: ${nA+nB}`);
    visor.textContent = visorStr;
  } 
  if (operation==="multiply") {
    visorStr = nA*nB;
    // console.log(`result: ${nA*nB}`)
    visor.textContent = visorStr;
  }
  if (operation==="subtract") {
    visorStr = nA-nB;
    // console.log(`result: ${nA-nB}`)
    visor.textContent = visorStr;
  }
  if (operation==="divide") {
    visorStr = nA/nB;
    // console.log(`result: ${nA/nB}`)
    visor.textContent = visorStr;
  }
  operation = "";
  nA=Number(visorStr);
  nB=0;
  calculateOk=true;
  // console.log(`number A: ${nA}`);
  // console.log(`number B: ${nB}`);
  // console.log(`operation: ${operation}`);
});


function pressNumber(digit){
  // console.log(`btn${digit}`);
  (visorStr==="0")?visorStr="":0;
  if (calculateOk===true) {
    calculateOk=false;
    visorStr=""
  }
  visorStr = visorStr + digit;
  // console.log(visorStr);
  visor.textContent = visorStr;
}

function clearAll(){
  visorStr = "0";
  visor.textContent = visorStr;
  nA = 0;
  nB = 0;
  operation = "";
  calculateOk = false;
  // console.log('clearAll');
  // console.log(`number A: ${nA}`);
  // console.log(`number B: ${nB}`);
  // console.log(`operation: ${operation}`);
}

function DisplayInternalStatus(){
  console.log('Internal Status');
  console.log(`visorStr: ${visorStr}`);
  console.log(`number A: ${nA}`);
  console.log(`number B: ${nB}`);
  console.log(`operation: ${operation}`);
  console.log(`calculateOk: ${calculateOk}`);
}

function clearEntry(){
  
  if (nA!=0) {
    nB=0;
    operation='';
    visorStr = "0";
    visor.textContent = visorStr;
    return;
  }
  
  clearAll();
  }


btn1.addEventListener("click", function(){pressNumber('1')});
btn2.addEventListener("click", function(){pressNumber('2')});
btn3.addEventListener("click", function(){pressNumber('3')});
btn4.addEventListener("click", function(){pressNumber('4')});
btn5.addEventListener("click", function(){pressNumber('5')});
btn6.addEventListener("click", function(){pressNumber('6')});
btn7.addEventListener("click", function(){pressNumber('7')});
btn8.addEventListener("click", function(){pressNumber('8')});
btn9.addEventListener("click", function(){pressNumber('9')});
btn0.addEventListener("click", function(){pressNumber('0')});

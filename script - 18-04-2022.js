"use strict";
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

btnAdd.addEventListener("click", function () {
  console.log("btnAdd");
  operation = "add";
  nA = Number(visorStr);
  visorStr = "0";
  console.log(`number A: ${nA}`);
  console.log(`operation: ${operation}`);
  visor.textContent = visorStr;
});

btnMultiply.addEventListener("click", function () {
  console.log("btnMultiply");
  operation = "multiply";
  nA = Number(visorStr);
  visorStr = "0";
  console.log(`number A: ${nA}`);
  console.log(`operation: ${operation}`);
  visor.textContent = visorStr;
});

btnSubtract.addEventListener("click", function () {
  console.log("btnSubtract");
  operation = "subtract";
  nA = Number(visorStr);
  visorStr = "0";
  console.log(`number A: ${nA}`);
  console.log(`operation: ${operation}`);
  visor.textContent = visorStr;
});

btnDivide.addEventListener("click", function () {
  console.log("btnDivide");
  operation = "divide";
  nA = Number(visorStr);
  visorStr = "0";
  console.log(`number A: ${nA}`);
  console.log(`operation: ${operation}`);
  visor.textContent = visorStr;
});

btnCalculate.addEventListener("click", function () {
  console.log("calculate");
  nB = Number(visorStr);
  console.log(`number A: ${nA}`);
  console.log(`number B: ${nB}`);
  console.log(`operation: ${operation}`);
  if (operation==="add") {
    visorStr = nA+nB;
    console.log(`result: ${nA+nB}`);
    visor.textContent = visorStr;
  } 
  if (operation==="multiply") {
    visorStr = nA*nB;
    console.log(`result: ${nA*nB}`)
    visor.textContent = visorStr;
  }
  if (operation==="subtract") {
    visorStr = nA-nB;
    console.log(`result: ${nA-nB}`)
    visor.textContent = visorStr;
  }
  if (operation==="divide") {
    visorStr = nA/nB;
    console.log(`result: ${nA/nB}`)
    visor.textContent = visorStr;
  }
  operation = "";
  nA=0;
  nB=0;
  calculateOk=true;
});

btn1.addEventListener("click", function () {
  console.log("btn1");
  (visorStr==="0")?visorStr="":0;
  if (calculateOk===true) {
    calculateOk=false;
    visorStr=""
  }
  visorStr = visorStr + "1";
  console.log(visorStr);
  visor.textContent = visorStr;
});

btn2.addEventListener("click", function () {
  console.log("btn2");
  (visorStr==="0")?visorStr="":0;
  if (calculateOk===true) {
    calculateOk=false;
    visorStr=""
  }
  visorStr = visorStr + "2";
  console.log(visorStr);
  visor.textContent = visorStr;
});

btn3.addEventListener("click", function () {
  console.log("btn3");
  (visorStr==="0")?visorStr="":0;
  if (calculateOk===true) {
    calculateOk=false;
    visorStr=""
  }
  visorStr = visorStr + "3";
  console.log(visorStr);
  visor.textContent = visorStr;
});

btn4.addEventListener("click", function () {
  console.log("btn4");
  (visorStr==="0")?visorStr="":0;
  if (calculateOk===true) {
    calculateOk=false;
    visorStr=""
  }
  visorStr = visorStr + "4";
  console.log(visorStr);
  visor.textContent = visorStr;
});

btn5.addEventListener("click", function () {
  console.log("btn5");
  (visorStr==="0")?visorStr="":0;
  if (calculateOk===true) {
    calculateOk=false;
    visorStr=""
  }
  visorStr = visorStr + "5";
  console.log(visorStr);
  visor.textContent = visorStr;
});

btn6.addEventListener("click", function () {
  console.log("btn6");
  (visorStr==="0")?visorStr="":0;
  if (calculateOk===true) {
    calculateOk=false;
    visorStr=""
  }
  visorStr = visorStr + "6";
  console.log(visorStr);
  visor.textContent = visorStr;
});

btn7.addEventListener("click", function () {
  console.log("btn7");
  (visorStr==="0")?visorStr="":0;
  if (calculateOk===true) {
    calculateOk=false;
    visorStr=""
  }
  visorStr = visorStr + "7";
  console.log(visorStr);
  visor.textContent = visorStr;
});

btn8.addEventListener("click", function () {
  console.log("btn8");
  (visorStr==="0")?visorStr="":0;
  if (calculateOk===true) {
    calculateOk=false;
    visorStr=""
  }
  visorStr = visorStr + "8";
  console.log(visorStr);
  visor.textContent = visorStr;
});

btn9.addEventListener("click", function () {
  console.log("btn9");
  (visorStr==="0")?visorStr="":0;
  if (calculateOk===true) {
    calculateOk=false;
    visorStr=""
  }
  visorStr = visorStr + "9";
  console.log(visorStr);
  visor.textContent = visorStr;
});

btn0.addEventListener("click", function () {
  console.log("btn0");
  (visorStr==="0")?visorStr="":0;
  if (calculateOk===true) {
    calculateOk=false;
    visorStr=""
  }
  visorStr = visorStr + "0";
  console.log(visorStr);
  visor.textContent = visorStr;
});

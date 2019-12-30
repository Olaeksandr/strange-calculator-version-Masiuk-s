'use strict';

let operandA;
let operandB;
let operator;
let result;
let numberOfOperands;
let operand;
let operands = [];


do {
    operator = prompt('Enter operator (+,-,*,/)');
} while (
    operator !== '+' &&
    operator !== '-' &&
    operator !== '*' &&
    operator !== '/'
);

do {
numberOfOperands = prompt('Enter number of operands from 0 to 5');
} while (
    isNaN(numberOfOperands) || 
    numberOfOperands === '' || 
    numberOfOperands < 0 || 
    numberOfOperands > 5);

numberOfOperands = Number(numberOfOperands);
console.log('quantity_operands:', numberOfOperands);

function  numberOfOperations(numberOfOperands){
     if(numberOfOperands > 1) {
        numberOfOperations(numberOfOperands - 1);
    }
    
    do {
        operand = prompt('Enter operand');
    } while (isNaN(operand) || operand === '');
    operands.push(operand);
    console.log('operands:', operands);
    console.log('operand:', operand);

  }
  
  numberOfOperations(numberOfOperands);

switch (operator) {
    case '+':
        result = operands.reduce((acc, num) => acc + Number(num), 0);
        break;
    case '-':
        result = operands.reduce((acc, num) => Math.abs(acc) - Number(num), 0);
        break;
    case '*':
        result = operands.reduce((acc, num) => acc * Number(num), 1);
        break;
    case '/':
        result = operands.reduce((acc, num) => acc / Number(num), 1);
        break;
}

alert(`Result operation "${operator}" : ${result}`);

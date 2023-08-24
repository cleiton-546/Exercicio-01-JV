alert("Iremos somar 2 números");
let numberOne = Number(prompt("Digite o primeiro número:"));
let numberTwo = Number(prompt("Digite o segundo número:"));

let calculations = {
  sum: numberOne + numberTwo,
  subtraction: numberOne - numberTwo,
  division: numberOne / numberTwo,
  restOfDivision: numberOne % numberTwo,
  multiplication: numberOne * numberTwo
};

alert("A soma é " + calculations.sum);
alert("A subtração é " + calculations.subtraction);
alert("A divisão é " + calculations.division);
alert("O resto da divisão é " + calculations.restOfDivision);
alert("A multiplicação é " + calculations.multiplication);

if (calculations.sum % 2 === 0) {
  alert("A soma é par.");
} else {
  alert("A soma é ímpar.");
}

if (numberOne === numberTwo) {
  alert("Os números são iguais.");
} else {
  alert("Os números são diferentes.");
}






// var -> Não utilizamos mais

// Variavel que pode ser reatribuida
let nome = "Alan";
nome = "Vinicius professor"; // <- String - valor do tipo texto

console.log(nome);

// Variavel que não pode ser reatribuida
const rg = 12562536; // <- number - valor do tipo number

console.log(rg);

let dia = true; // <- Boolean - valor  de verdadeiro (true) ou falso (false)

let aluno; // <- Tipo undefined

let noite = null; // <- Tipo nulo

console.log(5 / "y"); // <- Resultado not a number

//Operadores de comparação:

/*
  Atribuição de valor -> =
  Compara se valores são iguais -> ==
  Compara valores e tipos -> ===
  Compara se os valores são diferentes -> !=
  Compara se os valores são estritamente diferentes -> !==
  Compara se o valor é maior que outro -> >
  Compara se o valor é menor que outro -> <
*/

let number = 2;
let numero = "2";

console.log("Compara se valores são iguais");
console.log(number == numero);
console.log("Compara valores e tipos");
console.log(number === numero);
console.log("Compara se os valores são diferentes");
console.log(number != numero);
console.log("Compara se os valores são estritamente diferentes");
console.log(number !== numero);
console.log("Compara se o valor é maior que outro");
console.log(3 > 2);
console.log("Compara se o valor é maior que outro");
console.log(2 < 3);
console.log("Compara se o valor é maior e igual que outro");
console.log(3 >= 2);
console.log("Compara se o valor é menor e igual que outro");
console.log(2 <= 3);

/*
  if(condição) {
    retorno da condição
  }
*/

console.log("Verificando condicional");

let idade = 15;

if (idade > 18) {
  console.log("Você é maior de idade");
} else if (idade == 15) {
  console.log("Está na idade certa");
} else {
  console.log("Error");
}

// Condicional com ternario
console.log(idade > 18 ? "Você é maior de idade" : "Você é menor de idade");

let temluz = false;
let sim = "Acenda as luzes";
let nao = "Aguarde a energia voltar";

if (temluz) {
  console.log(sim);
} else {
  console.log(nao);
}

// Condicional com ternario
console.log(temluz == true ? sim : nao);

let valor = prompt("Digite um numero!");

valor == 5 ? alert("Você foi premiado") : alert("Você errou");

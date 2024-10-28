console.log("*************** Loops ***************");

// For

for (let i = 0; i <= 5; i++) {
  console.log("Primeiro For");
  console.log(i);
}

for (let i = 2; i <= 10; i += 2) {
  console.log("Segundo For ");
  console.log(i);
}

// While

let i = 1;

while (i <= 16) {
  console.log("While Incremento");
  console.log(i);
  i++;
}

i = 5;

while (i > 0) {
  console.log("While Decremento");
  console.log(i);
  i--;
}

// Operadores Lógicos

/*
  &&
  ||
*/
console.log("*************** Operadores Lógicos ***************");
let login = "alan";
let senha = 123;

if (login === "alan" && senha === 123) {
  console.log("Bem vindo");
} else {
  console.log("Login ou senha errado");
}

let membroClube = false;
let temConvite = true;

if (membroClube || temConvite) {
  console.log("Pode entrar");
} else {
  console.log("Não pode entrar");
}

// Operadores de atribuição
console.log("*************** Operadores de atribuição ***************");

// Adição -> +
console.log("Adicionando");
console.log(5 + 5);
// Subtração -> -
console.log("Subtraindo");
console.log(5 - 2);
// Multiplicação  -> *
console.log("Multiplicando");
console.log(5 * 5);
// Divisão -> /
console.log("Dividindo");
console.log(5 / 2);
// Divisão com resto -> %
console.log("Dividindo com resto");
console.log(5 % 3);

// Incremento e Decremento
console.log("*************** Incremento e Decremento ***************");
let num = 5;
console.log("Incrementando o num:" + num++);
console.log("num incrementado: " + num);

console.log("Decrementando o num:" + num--);
console.log("num Decrementado: " + num);

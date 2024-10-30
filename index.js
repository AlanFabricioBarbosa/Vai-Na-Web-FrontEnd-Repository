// Array

let frutas = ["Banana", "Maçã", "Uva", "Laranja"];

let series = ["The Wire", "Game of Thrones", "Black Mirros", "Vikings"];
console.log(series);

// Adiciona mais um item no final do array
console.log("\n**** Adicionando mais um item no final do array com .push ****");
series.push("Flash");
console.log(series);

// Adiciona mais um item no inicio do array
console.log(
  "\n**** Adicionando mais um item no inicio do array com .unshift ****"
);
series.unshift("The Office");
console.log(series);

// Reverte a ordem do array
console.log("\n**** Revertendo a ordem do array com .reverse ****");
series.reverse();
console.log(series);

// Remove o primeiro item da array
console.log("\n**** Removendo o primeiro item do array com .shift ****");
series.shift();
console.log(series);

// Remove o ultimo item da array
console.log("\n**** Removendo o ultimo item do array com .pop ****");
series.pop();
console.log(series);

// Remove um item/ itens do array de acordo com a posição dele
console.log(
  "\n**** um item/ itens do array de acordo com a posição dele com .slice ****"
);
let umaSerie = series.slice(1, 3);
console.log(umaSerie);

// Ordenando um array
let num = [2, 5, 3, 4, 1, 6, 9, 8, 7];
console.log("\n**** Ordenando um array com o .sort ****");
num.sort();
console.log(num);

//Objeto
console.log("\n**** Entendendo um objeto ****");
const aluno = {
  id: 1,
  nome: "Alan",
  idade: 26,
  profissao: "Desenvolvedor",
  cpf: 88888,
};
console.log(aluno);

// Adicionando um item no objeto
console.log("\n**** Adicionando mais um item no objeto ****");
aluno.endereco = "Rua das Flores";
console.log(aluno);

// Deletando um item do objeto
console.log("\n**** Deletando um item do objeto ****");
delete aluno.idade;
console.log(aluno);

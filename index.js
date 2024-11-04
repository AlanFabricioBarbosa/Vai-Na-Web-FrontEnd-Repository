function bomDia() {
  console.log("Bom Dia");
}
//bomDsia()

let info = function (nome, idade, cidade) {
  console.log(
    `
    \nParametro nome: ${nome}
    \nParametro idade: ${idade}
    \nParametro cidade: ${cidade}
    `
  );
};
//info("Alan", 26, "Maceió");

let frutas = "morango";
function mostrarFruta(fruta) {
  console.log(fruta);
}
//mostrarFruta(frutas);

function soma(num1, num2) {
  return num1 + num2;
}
//console.log(soma(2, 2));

const subtrair = (sub1, sub2) => {
  return sub1 - sub2;
};
//console.log(subtrair(5, 2));

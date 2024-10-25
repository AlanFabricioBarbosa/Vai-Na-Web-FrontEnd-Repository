let verificaDia = false;

console.log(verificaDia === true ? "Está de dia" : "Está de noite");

let verificaTemperatura = 30;

console.log(
  verificaTemperatura > 30
    ? "Está muito quente"
    : "A temperatura está agradável"
);

let verificaIdade = 26;

if (verificaIdade < 12) {
  console.log("Criança");
} else if (verificaIdade >= 12 && verificaIdade <= 18) {
  console.log("Adolescente");
} else if (verificaIdade >= 19 && verificaIdade <= 60) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

let calcNotas = 8.5;

switch (true) {
  case calcNotas >= 9:
    console.log("Nota A");
    break;
  case calcNotas >= 8:
    console.log("Nota B");
    break;
  case calcNotas >= 7:
    console.log("Nota C");
    break;
  case calcNotas >= 6:
    console.log("Nota D");
    break;
  default:
    console.log("Nota F");
    break;
}

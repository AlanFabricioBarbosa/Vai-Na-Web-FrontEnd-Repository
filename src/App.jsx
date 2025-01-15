import "./global.scss";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("joe");
  const [color, setColor] = useState("#F00");
  const [num, setNum] = useState(0);

  const handleName = () => {
    setName("Alan");
  };

  const handleColor = () => {
    setColor("#0F0");
  };

  const handleNum = () => {
    setNum(num + 1);
  };

  return (
    <>
      <section style={{ background: color }}>
        <h1>Meu nome é: {name}</h1>
        <h2>Você recebeu {num} de likes</h2>
        <button onClick={handleName}>Botão setName{handleName}</button>
        <button onClick={handleColor}>Mudar a cor</button>
        <button onClick={handleNum}>Dar like</button>
      </section>
    </>
  );
}

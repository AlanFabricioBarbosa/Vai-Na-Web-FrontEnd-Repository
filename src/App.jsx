import { useState } from "react";
import "./global.scss";
import ImgGenio from "./assets/img/imagemGenioComLampada.png";
import ImgLampada from "./assets/img/imagemLampadaMagica.png";

export default function App() {
  const [imgGenio, setImgGenio] = useState(ImgLampada);

  const handleImage = () => {
    setImgGenio(ImgGenio);
  };

  return (
    <main>
      <h1>Liberte a magia da programação com a lâmpada de Aladim.</h1>
      <img src={imgGenio} alt="Imagem de uma lampada magica" />
      <button onClick={handleImage}>Clique Aqui</button>
    </main>
  );
}

import "./global.scss";

export default function App() {
  const tarefas = [
    {
      id: 1,
      task: "Arroz",
    },
    {
      id: 2,
      task: "Feijão",
    },
    {
      id: 3,
      task: "Limpar a casa",
    },
    {
      id: 4,
      task: "Lavar roupa",
    },
    {
      id: 5,
      task: "Tirar o lixo",
    },
  ];

  const cadastro = [
    {
      id: 1,
      img: "https://praia.info/wp-content/uploads/2024/01/rio-de-janeiro.webp",
      description: "Imagem generica",
      title: "Rio de Janeiro",
      date: "01/01/2025",
      price: "R$ 500,00",
    },
    {
      id: 2,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6a/16/60/caption.jpg?w=1200&h=-1&s=1",
      description: "Imagem generica",
      title: "Salvador",
      date: "05/01/2025",
      price: "R$ 400,00",
    },
    {
      id: 3,
      img: "https://turismodenatureza.com.br/wp-content/uploads/2024/07/Pequenos-Lencois-Maranhenses-1080x630.jpg",
      description: "Imagem generica",
      title: "Lençois Maranhenses",
      date: "15/02/2025",
      price: "R$ 700,00",
    },
  ];

  return (
    <>
      <h1>Usando Map no react</h1>
      <div>
        <h2>Tarefas</h2>
        <ul>
          {tarefas.map((i) => (
            <li key={i.id}>{i.task}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Viagens Vai na Web</h2>
        {cadastro.map((i) => (
          <div key={i.id}>
            <img src={i.img} alt={i.description} width="500" />
            <h2>{i.title}</h2>
            <p>{i.date}</p>
            <p>{i.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

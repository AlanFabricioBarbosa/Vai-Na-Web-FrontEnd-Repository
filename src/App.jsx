import "./global.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [product, setProduct] = useState([]);

  const getData = async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    setProduct(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Loja Vai Na Web</h1>
      <section>
        {product.map((i) => (
          <div key={i.id}>
            <h2>{i.title}</h2>
            <figure>
              <img src={i.image} alt={i.image} />
              <figcaption>{i.category}</figcaption>
              <figcaption>{i.description}</figcaption>
            </figure>
            <p>{i.price}</p>
            <p>{i.rating.rate}</p>
            <p>{i.rating.count}</p>
          </div>
        ))}
      </section>
    </>
  );
}

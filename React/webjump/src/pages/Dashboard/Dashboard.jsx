// CSS
import style from "./Dashboard.module.css";

// Hooks
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from "react";


function Dashboard() {

  const {data} = useFetch(import.meta.env.VITE_API, "DELETE");
  const [products, setProducts] = useState(null);

  const handleDelete = (id) => {
    const idToRemove = id;
    setProducts((prevProducts) => prevProducts.filter(item => item.id !== idToRemove));
  }

  useEffect(() => {
    setProducts(data);
  }, [data])

  return (
    <div>
      {products && 
        products.map((product) => (
          <div className={style.product} key={product.id}>
            <div className={style.image}>
              <img src={product.image.replace("media", "../../../src/assets")} alt={product.name} />
            </div>
            <div>
              <p className={style.title}>{product.name}</p>
              <p className={style.price}>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              <a href="#" onClick={(e) => { e.preventDefault(); handleDelete(product.id); }} className={style.btn}>Deleter</a>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Dashboard
// CSS
import { Link } from "react-router-dom";
import style from "./CardProduct.module.css";

function CardProduct({name, price, image, id}) {

  const replaceSrcImage = image.replace("media", "../src/assets");
  const formatPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className={style.product}>
      <div className={style.image}>
        <img src={replaceSrcImage} alt={name} />
      </div>
      <div>
        <p className={style.title}>{name}</p>
        <p className={style.price}>{formatPrice}</p>
        <Link to={`product/${id}`} className={style.btn}>Detalhes</Link>
      </div>
    </div>
  )
}

export default CardProduct
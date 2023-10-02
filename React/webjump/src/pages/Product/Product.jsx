// CSS
import style from './Product.module.css'

// Hooks
import useLastWordFromURL from '../../hooks/useLastWordFromURL'
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function Product() {
  
  const lastWord = useLastWordFromURL();
  const url = `${import.meta.env.VITE_API}/${lastWord}`;
  const {data} = useFetch(lastWord ? url : null);
   
  
  return (
   <>
    {
      data && 
      <div className={style.product}>
        <div className={style.image}>
          <img src={data.image.replace("media", "../../../src/assets")} alt={data.name} />
        </div>
        <div>
          <p className={style.title}>{data.name}</p>
          <p className={style.price}>{data.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          <Link to="#" className={style.btn}>Comprar</Link>
        </div>
      </div>
    }
   </>
  )
}

export default Product
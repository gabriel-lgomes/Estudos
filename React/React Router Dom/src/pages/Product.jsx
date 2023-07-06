import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"


function Product() {

  // 3 - Roda dinamica
  const {id} = useParams();

  // 4 - Carregamento individual dos produtos

  const url = `http://localhost:3000/products/${id}`

  const {data: product, loading, error} = useFetch(url);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>R$ {product.price}</p>
          {/* 4 - Nested route */}
          <Link to={`/products/${product.id}/info`}>Mais detalhes do produto</Link>
        </div>
      )}
    </>
  )
}

export default Product
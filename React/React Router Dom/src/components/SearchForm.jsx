import { useNavigate } from "react-router-dom"
import { useState } from "react"

function SearchForm() {

  const navigate = useNavigate();

  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${query}`)

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Buscar</button>
    </form>
  )
}

export default SearchForm
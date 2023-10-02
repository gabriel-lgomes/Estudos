import { useLocation } from "react-router-dom"; 

// CSS
import style from "./Breadcrumb.module.css"

function Breadcrumb() { 
 
  const {pathname} = useLocation();
  const words = pathname.split("/").filter(word => word !== "product" && word !== "" && word !== "products");
 
   
  return (
    <div className={style.breadcrumb}>
      <a href="/">Página Inicial {words.length >= 1 ? <>&gt;</> : "" } </a> 
      {words &&  
        words.map((item) => (
          <div key={item} className={style.arrow}>
            <a href={item}>{item}</a> <span>&gt;</span>
          </div>
      ))}  
     
    </div>
  )
}

export default Breadcrumb
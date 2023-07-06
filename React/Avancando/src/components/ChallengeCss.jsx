import styles from './ChallengeCss.module.css'

function ChallengeCss({car}) { 

  return (
    <div className={styles.showRoom}>  
      <h1 className={styles.title}> {car.marca}: {car.modelo}</h1>
      <ul> 
        <li key={car.id}>
          <p>Marca: {car.marca}</p>
          <p>Modelo: {car.modelo}</p>
          <p>Km: {car.km}</p>
          <p>Tipo: {car.novo === true ? <span className={styles.novo}>Novo</span> : <span className={styles.usado}>Usado</span>} </p>
        </li> 
      </ul>

    </div>
  )
}

export default ChallengeCss
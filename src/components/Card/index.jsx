import { apartmentList } from '../../datas/apartmentList'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

function Card() {
  return (
  <section className={styles.cardsContainer}>
    {apartmentList.map(({ id, cover, title }) => 
    <Link key={`${ id }`} to={`/apartment/${ id }`}>
      <div className={styles.cardWrapper}>
      <div className={styles.gradientWrapper}></div>
        <img className={styles.cardImage} src={ cover } alt="Presentation couverture logement"/>
        <h3 className={styles.cardTitle}>
          { title }
        </h3>
      </div>
    </Link>
    )}
  </section>
  )
}

export default Card
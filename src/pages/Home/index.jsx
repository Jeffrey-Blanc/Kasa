import PhotoHome from '../../assets/img-home.png'
import Card from '../../components/Card'
import styles from './Home.module.css'

function Home() {
  return (
    <div>
      <div className={styles.coverHome}>
        <h2 className={styles.titleHome}>
          Chez vous, partout et ailleurs
        </h2>
        <img className={styles.pictureHome} src={PhotoHome} alt="paysage cotiere"/>
        <div className={styles.backgroundCoverHome}>
        </div>
      </div>
      
      <Card />
    </div>
  )
}

export default Home
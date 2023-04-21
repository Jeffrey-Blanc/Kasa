import { useParams } from 'react-router-dom'
import { apartmentList } from '../../datas/apartmentList'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import styles from './Apartment.module.css'

function Apartment() {
  const { id } = useParams()
  const apartment = apartmentList.find(apartment => apartment.id === id);
  let className = 'fa-solid fa-star';

  return (
    <div>
      <Slideshow apartment={apartment}/>

      <section className={styles.informationContain}>
        <section>
          <h2 className={styles.titleApartment}>{apartment.title}</h2>
          <p className={styles.locationApartment}>
            {apartment.location}
          </p>
        </section>
        <div className={styles.containProfile}>
          <div className={styles.nameProfile}>
            {apartment.host.name}
          </div>
          <img className={styles.avatarProfile} src={apartment.host.picture} alt="Avatar profile"/>
        </div>
      </section>

      <section className={styles.informationContain}>
        <div className={styles.containTag}>
          {apartment.tags.map((tag, index) => (
            <div key={`${tag}-${index}`} className={styles.tag}>
              {tag}
            </div>
          ))}
        </div>
          <div>
            <i className={className}></i>
            <i className={className}></i>
            <i className={className}></i>
            <i className={className}></i>
            <i className={className}></i>
          </div>
      </section>

      <div className={styles.wrapperCollapse}>
        <Collapse title='Description' content={apartment.description}/>
        <Collapse title='Equipements' content={apartment.equipments}/>
      </div>
    </div>
  )
}

export default Apartment
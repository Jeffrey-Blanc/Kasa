import { useParams } from 'react-router-dom'
import { apartmentList } from '../../datas/apartmentList'
import Collapse from '../../components/Collapse'
import { useState } from 'react'
import styles from './Apartment.module.css'

function Apartment() {
  const { id } = useParams()
  const apartment = apartmentList.find(apartment => apartment.id === id);
  const [index, setIndex] = useState(0)

  const nextPicture = () => {
    if (index === apartment.pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    // setIndex((index + 1) % apartment.pictures.length)
  }

  const previousPicture = () => {
    if ((index) === 0) {
      setIndex(apartment.pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
    // setIndex((index + apartment.pictures.length  - 1) %  apartment.pictures.length)
  }


  return (
    <div>
      <div className={styles.carouselApartment}>
        <img className={styles.pictureApartment} src={apartment.pictures[index]} alt="Slide presentation appartement"/>
        {(apartment.pictures.length > 1) && (
          <div className={styles.carouselCommandes}>
            <button className={styles.commandesButton}><i class="fa-solid fa-chevron-left" onClick={previousPicture}></i></button>
            <div className={styles.pagePicture}> 
              {index + 1}/{ apartment.pictures.length } 
            </div>
            <button className={styles.commandesButton}><i class="fa-solid fa-chevron-right" onClick={nextPicture}></i></button>
          </div>
        )}
      </div>

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
          {apartment.tags.map((tag) => (
            <div className={styles.tag}>
              {tag}
            </div>
          ))}
        </div>
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
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
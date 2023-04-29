import { useParams } from 'react-router-dom'
import { apartmentList } from '../../datas/apartmentList'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import styles from './Apartment.module.css'
import Error from "../../components/Error"


function Apartment() {
  const { id } = useParams()
  const apartment = apartmentList.find(apartment => apartment.id === id)

  if(!apartment) {
    return <Error />
  }

  let starFilled = 'fa-solid fa-star'
  let starEmpty = 'fa-regular fa-star'

  let noteRating = []
  for(let i = 0; i <= 4; i++) {
    if(apartment.rating >= (i + 1)){
      noteRating.push(<i key={`${apartment.rating}-${i}`} className={starFilled}></i>)
    } else {
      noteRating.push(<i key={`${apartment.rating}-${i}`} className={starEmpty}></i>)
    }
  }

  return (
    <div>
      <Slideshow apartment={apartment}/>

      <div className={styles.informationGlobal}>
        <div className={styles.informationApartment}>
          <section>
            <h2 className={styles.titleApartment}>{apartment.title}</h2>
            <p className={styles.locationApartment}>
              {apartment.location}
            </p>
          </section>

          <div className={styles.containTag}>
            {apartment.tags.map((tag, index) => (
              <div key={`${tag}-${index}`} className={styles.tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>


        <div className={styles.informationProfile}>
          <div className={styles.containProfile}>
            <div className={styles.nameProfile}>
              {apartment.host.name}
            </div>
            <img className={styles.avatarProfile} src={apartment.host.picture} alt="Avatar profile"/>
          </div>

          <div className={styles.rating}>
              {noteRating}
          </div>
        </div>
      </div>

      <div className={styles.wrapperCollapse}>
        <Collapse title='Description' content={apartment.description}/>
        <Collapse title='Equipements' content={apartment.equipments}/>
      </div>
    </div>
  )
}

export default Apartment
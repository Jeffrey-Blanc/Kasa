import styles from './Slideshow.module.css'
import { useState } from 'react'

function Slideshow(props) {
  const [index, setIndex] = useState(0)
  let classNameLeft = 'fa-solid fa-chevron-left';
  let classNameRight = 'fa-solid fa-chevron-right';

  // console.log(props.apartment.pictures);
  const nextPicture = () => {
    if (index === props.apartment.pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    // setIndex((index + 1) % apartment.pictures.length)
  }

  const previousPicture = () => {
    if ((index) === 0) {
      setIndex(props.apartment.pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
    // setIndex((index + apartment.pictures.length  - 1) %  apartment.pictures.length)
  }

  return (
    <div className={styles.carouselApartment}>
      <img className={styles.pictureApartment} src={props.apartment.pictures[index]} alt="Slide presentation appartement"/>
      {(props.apartment.pictures.length > 1) && (
        <div className={styles.carouselCommandes}>
          {/* <button className={styles.commandesButton}><i class="fa-solid fa-chevron-left" onClick={previousPicture}></i></button> */}
          <button className={styles.commandesButton}><i className={classNameLeft} onClick={previousPicture}></i></button>
          <div className={styles.pagePicture}> 
            {index + 1}/{ props.apartment.pictures.length } 
          </div>
          {/* <button className={styles.commandesButton}><i class="fa-solid fa-chevron-right" onClick={nextPicture}></i></button> */}
          <button className={styles.commandesButton}><i className={classNameRight} onClick={nextPicture}></i></button>
        </div>
      )}
    </div>
  )
}

export default Slideshow
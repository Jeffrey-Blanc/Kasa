import {useEffect} from "react";
import PhotoAbout from '../../assets/img-about.png'
import { aboutList } from '../../datas/aboutList'
import Collapse from '../../components/Collapse'
import styles from './About.module.css'

function About() {
  useEffect(() => {
    document.title = "Kasa - A propos";
  }, []);

  return (
    <div>
      <div className={styles.carouselAbout}>
        <img className={styles.pictureAbout} src={PhotoAbout} alt="Paysage vallee"/>
      </div>
      <div className={styles.containerAbout}>
        {aboutList.map(({ title, content, index}) =>
        <Collapse 
          key={`${title}-${index}`}
          title={title} 
          content={content}/>
         )}
      </div>
    </div>
  )
}

export default About
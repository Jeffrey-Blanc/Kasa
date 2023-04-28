import { useState } from 'react'
import styles from './Collapse.module.css'

function Collapse(props) {
  const [isActive, setIsActive] = useState(false)
  let iconChevronDown = 'fa-solid fa-chevron-down'
  let iconChevronUp = 'fa-solid fa-chevron-up'
  
  let ListContent = ""
  if(Array.isArray(props.content)){
    ListContent = props.content.map((content, index) =>
      <li key={`${content}-${index}`} className={styles.listEquipements}>{content}</li>
    );
  }

  return (
    <section className={styles.wrapperCollapse  + ` ${isActive ? styles.isActive : '' }`}>
      <h2 className={styles.titleCollapse} onClick={() => setIsActive(!isActive)}>
        {props.title}
        {isActive ? <i className={iconChevronDown}></i> : <i className={iconChevronUp}></i>}
      </h2>
      {isActive && !Array.isArray(props.content) && (
        <p className={styles.contentCollapse}>
          {props.content}
        </p>
      )}
      {isActive && Array.isArray(props.content) && (
        <div className={styles.contentCollapse}>
          <ul>
            {ListContent}
          </ul>
        </div>
      )}
    </section>
  )
}

export default Collapse
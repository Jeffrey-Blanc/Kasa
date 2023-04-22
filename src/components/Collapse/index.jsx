import { useState } from 'react'
import styles from './Collapse.module.css'

function Collapse(props) {
  const [isActive, setIsActive] = useState(false)
  let className = 'fa-solid fa-chevron-down'

  
  let ListContent = ""
  if(Array.isArray(props.content)){
    ListContent = props.content.map((content, index) =>
      // <li>{content}</li>
      <li key={`${content}-${index}`} className={styles.listEquipements}>{content}</li>
    );
  }

  return (
    <section className={styles.wrapperCollapse  + ` ${isActive ? 'isActive' : '' }`}>
      <h2 className={styles.titleCollapse} onClick={() => setIsActive(!isActive)}>
        {props.title}
        <i className={className}></i>
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
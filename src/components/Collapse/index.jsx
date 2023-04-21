import { useState } from 'react'
import styles from './Collapse.module.css'

function Collapse(props) {
  const [isActive, setIsActive] = useState(false)
  let ListContent = ""
  if(Array.isArray(props.content)){
    ListContent = props.content.map((content) => 
      <li>{content}</li>
    );
  }

  return (
    <section className={styles.wrapperCollapse}>
      <h2 className={styles.titleCollapse} onClick={() => setIsActive(!isActive)}>
        {props.title}
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
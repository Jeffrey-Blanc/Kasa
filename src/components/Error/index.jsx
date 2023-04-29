// import { StyledLink } from '../../utils/style/Atoms'
import styles from './Error.module.css'
import '../../utils/style/Atoms.css';

function Error() {
  // return (
  //   <section className={styles.errorContainer}>
  //     <h2 className={styles.errorTitle}>
  //       404
  //     </h2>
  //     <div className={styles.errorText}>
  //       Oups! La page que vous demandez n'éxiste pas.
  //     </div>
  //     <StyledLink to='/' $isErrorLink>
  //       Retourner sur la page d'accueil
  //     </StyledLink>
  //   </section>
  // )
  return (
    <section className={styles.errorContainer}>
      <h2 className={styles.errorTitle}>
        404
      </h2>
      <div className={styles.errorText}>
        Oups! La page que vous demandez n'éxiste pas.
      </div>
      <a className="link--error" href='/'>
        Retourner sur la page d'accueil
      </a>
    </section>
  )
}

export default Error
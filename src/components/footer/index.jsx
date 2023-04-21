import Logo from '../../assets/LogoWhite.png'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer () {
  return (
    <footer className={styles.footerContainer}>
      <Link to="/">
          <img className={styles.footerLogo} src={Logo} alt="Logo Kasa"/>
      </Link>
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}

export default Footer
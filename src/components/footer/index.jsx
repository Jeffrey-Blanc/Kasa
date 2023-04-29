import Logo from '../../assets/LogoWhite.png'
import styles from './Footer.module.css'
import '../../utils/style/Atoms.css'

function Footer () {
  return (
    <footer className={styles.footerContainer}>
      <a className="link" href="/">
          <img className={styles.footerLogo} src={Logo} alt="Logo Kasa"/>
      </a>
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}

export default Footer
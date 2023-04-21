import { Link } from 'react-router-dom'
import { StyledLink } from '../../utils/style/Atoms'
import Logo from '../../assets/LogoPink.png'
import styles from './Header.module.css'

function Header () {
  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <img src={Logo} className={styles.headerLogo} alt="Logo Kasa"/>
      </Link>
      <div>
        <StyledLink to="/">
          <span>Accueil</span>
        </StyledLink>
        <StyledLink to="/about">
          <span>A propos</span>
        </StyledLink>
      </div>
  </header>
  )
}

export default Header
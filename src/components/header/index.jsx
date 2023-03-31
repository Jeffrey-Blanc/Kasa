import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/LogoPink.png'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 40px 100px;
`

const HeaderLogo = styled.img`
  height: 70px;
`

const ListNav = styled.ul`
  display: flex;
  list-style-type: none;
`


function Header () {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo src={Logo}/>
      </Link>
      <nav>
        <ListNav>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ListNav>
      </nav>
  </HeaderContainer>
  )
}

export default Header
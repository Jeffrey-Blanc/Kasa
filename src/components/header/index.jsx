import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import Logo from '../../assets/LogoPink.png'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 40px 100px;
  align-items: center;
`

const HeaderLogo = styled.img`
  height: 70px;
`

function Header () {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo src={Logo}/>
      </Link>
      <div>
        <StyledLink to="/">
          <span>Accueil</span>
        </StyledLink>
        <StyledLink to="/about">
          <span>A propos</span>
        </StyledLink>
      </div>
  </HeaderContainer>
  )
}

export default Header
import Logo from '../../assets/LogoWhite.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterLogo = styled.img`
  height: 50px;
  margin: 20px;
`

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  color: #fff;
  padding: 40px;
`

function Footer () {
  return (
    <FooterContainer>
      <Link to="/">
          <FooterLogo src={Logo}/>
      </Link>
      <span>© 2020 Kasa. All rights reserved</span>
    </FooterContainer>
  )
}

export default Footer
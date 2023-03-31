import { Link } from 'react-router-dom'
import colors from './colors'
import styled from 'styled-components'

// export const StyledLink = styled(Link)`
//   padding: 10px 15px;
//   font-size" 24px;
//   color: ${colors.primary};
//   text-align: center;
//   &:visited {
//     color: ${colors.primary};
//   }
// `
export const StyledLink = styled(Link)`
  font-size: 24px;
  padding: 10px 15px;
  color: ${colors.primary};    
  text-align: center;
  text-decoration: none;
  &:visited {
    color: ${colors.primary};
  }
  ${(props) =>
    props.$isErrorLink &&
    `font-size: 2vh; 
    margin: 20px 0; `}
`
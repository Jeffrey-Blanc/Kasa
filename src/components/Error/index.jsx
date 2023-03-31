import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${colors.primary}
`

const ErrorTitle = styled.h2`
  font-size: 10vw;
  margin: 20px 0;
`

const ErrorText = styled.div`
  margin: 20px 0;
  font-size: 4vh;
`

function Error() {
  return (
    <ErrorContainer>
      <ErrorTitle>
        404
      </ErrorTitle>
      <ErrorText>
        Oups! La page que vous demandez n'éxiste pas.
      </ErrorText>
      <StyledLink to='/' $isErrorLink>
        Retourner sur la page d'accueil
      </StyledLink>
    </ErrorContainer>
  )
}

export default Error
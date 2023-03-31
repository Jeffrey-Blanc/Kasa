import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardWrapper = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 10px;
  background: ${colors.primary}  
`
// background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);

function Card() {
  return (
    <CardWrapper>

    </CardWrapper>
  )
}

export default Card
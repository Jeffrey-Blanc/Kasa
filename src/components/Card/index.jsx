import styled from 'styled-components'
import colors from '../../utils/style/colors'
import ImgRemplacer from '../../assets/img-about.png'

const CardWrapper = styled.div`
  position: relative;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  background: ${colors.primary}  
`
const CardImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CardTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  padding: 20px;
  font-size: 2vh;
  font-style: normal;
  font-weight: 500;
`

// background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);

function Card() {
  return (
    <CardWrapper>
      <CardImage src={ImgRemplacer}/>
      <CardTitle>
        Test
      </CardTitle>
    </CardWrapper>
  )
}

export default Card
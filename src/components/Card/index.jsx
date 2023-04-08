import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { apartmentList } from '../../datas/apartmentList'
import { Link } from 'react-router-dom'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 340px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  background-color: ${colors.secondary};
  border-radius: 25px;
  padding: 56px 50px;
`

const CardWrapper = styled.div`
  position: relative;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  overflow: hidden;
`
const GradientWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
`

const CardImage = styled.img`
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

function Card() {
  return (
  <CardsContainer>
    {apartmentList.map(({ id, cover, title }) => 
    <Link to={`/apartment/${ id }`}>
      <CardWrapper>
        <GradientWrapper />
        <CardImage src={ cover }/>
        <CardTitle>
          { title }
        </CardTitle>
      </CardWrapper>
    </Link>
    )}
  </CardsContainer>
  )
}

export default Card
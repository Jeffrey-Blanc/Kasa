import styled from 'styled-components'
import PhotoHome from '../../assets/img-home.png'

const CoverHome = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 225px;
  color: white;
  text-align: center;
`

const TitleHome = styled.h2`
  z-index: 2;
`

const PictureHome = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  max-height: 225px;
  object-fit: cover;
  border-radius: 25px;
`

function Home() {
  return (
    <CoverHome>
      <TitleHome>
        Chez vous, partout et ailleurs
      </TitleHome>
      <PictureHome src={PhotoHome}/>
    </CoverHome>
  )
}

export default Home
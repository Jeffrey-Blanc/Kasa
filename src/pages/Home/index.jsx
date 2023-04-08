import styled from 'styled-components'
import PhotoHome from '../../assets/img-home.png'
import Card from '../../components/Card'

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
  font-style: normal;
  font-weight: 500;
  z-index: 3;
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

const BackgroundCoverHome = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: #000;
  border-radius: 25px;
  opacity: 0.3;
`
function Home() {
  return (
    <div>
      <CoverHome>
        <TitleHome>
          Chez vous, partout et ailleurs
        </TitleHome>
        <BackgroundCoverHome />
        <PictureHome src={PhotoHome}/>
      </CoverHome>
      <Card />
    </div>
  )
}

export default Home
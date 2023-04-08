import PhotoAbout from '../../assets/img-about.png'
import styled from 'styled-components'
import { aboutList } from '../../datas/aboutList'
import Collapse from '../../components/Collapse'

const CarouselAbout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 225px;
  color: white;
  text-align: center;
`

const PictureAbout = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  max-height: 225px;
  object-fit: cover;
  border-radius: 25px;
`

const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 110px;
`

function About() {
  return (
    <div>
      <CarouselAbout>
        <PictureAbout src={PhotoAbout}/>
      </CarouselAbout>
      <ContainerAbout>
        {aboutList.map(({ title, content}) =>
        <Collapse 
          title={title} 
          content={content}/>
         )}
      </ContainerAbout>
    </div>
  )
}

export default About
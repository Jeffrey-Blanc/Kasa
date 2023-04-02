// import colors from '../../utils/style/colors'
import PhotoAbout from '../../assets/img-about.png'
import styled from 'styled-components'
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

// const TitleCollapse = styled.h2`
//   background-color: ${colors.primary};
//   color: #fff;
//   cursor: pointer;
//   padding: 18px;
//   margin: 0px;
//   border: none;
//   text-align: left;
//   outline: none;
//   font-size: 15px;
//   border-radius: 5px;
// `
// const ContentCollapse = styled.div`
//   display: block;
//   color: ${colors.primary};
//   padding: 18px;
//   overflow: hidden;
//   background-color: #f1f1f1;
//   border-radius: 5px;
// `

function About() {

  // function handleCollapse() {

  // }


  return (
    <div>
      <CarouselAbout>
        <PictureAbout src={PhotoAbout}/>
      </CarouselAbout>
      <ContainerAbout>
        {/* <div>
          <TitleCollapse onClick={() => handleCollapse()}>
            Fiabilité
          </TitleCollapse>
          <ContentCollapse>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont 
            régulièrement vérifiées par nos équipes.
          </ContentCollapse>
        </div>
        <div>
          <TitleCollapse onClick={() => handleCollapse()}>
            Respect
          </TitleCollapse>
          <ContentCollapse>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera 
            une exclusion de notre plateforme.
          </ContentCollapse>
        </div> */}
        <Collapse />
      </ContainerAbout>
    </div>
  )
}

export default About
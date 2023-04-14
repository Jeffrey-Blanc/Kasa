import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { apartmentList } from '../../datas/apartmentList'
import Collapse from '../../components/Collapse'
import colors from '../../utils/style/colors'

// Carrousel
const CarouselApartment = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 415px;
  color: white;
  text-align: center;
`

const PictureApartment = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  max-height: 415px;
  object-fit: cover;
  border-radius: 25px;
`

const Button = styled.button`
  z-index: 2;
  width: 60px;
  height: 60px;
  border: none;
  background: initial;
  color: white;
  font-size: 4rem;
  margin: 0 10px;
  cursor: pointer;
`

const PagePicture = styled.div`
  z-index: 2;
  align-self: flex-end;
  margin-bottom: 25px;
  color: white;
  font-weight: bold;
`

// Informations Titre / Location / Profile 
const InformationContain = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  color: ${colors.primary};
`

const TitleApartment = styled.h2`
  margin: 0;
`

const LocationApartment = styled.p`
  margin: 0;
`

const ContaintProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const NameProfile = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  text-align: right;
  margin-right: 10px;
`

const AvatarProfile = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`

// Informations Tag / note 
const ContaintTag = styled.div`
  display: flex;
`

const Tag = styled.div`
  background: ${colors.primary};
  color: #fff;
  margin-right: 1em;
  padding: 0.3em 3em;
  border-radius: 1em;
`

const WrapperCollapse = styled.div`
  display: flex;
  justify-content: space-between;
`

function Apartment() {
  const { id } = useParams()
  const apartment = apartmentList.find(apartment => apartment.id === id);

  return (
    <div>
      <h2 key={ id }>Apartment { id }</h2>
      <CarouselApartment>
        {apartment.pictures.map((picture) => 
          <PictureApartment src={picture}/>
        )}
        <Button><i class="fa-solid fa-chevron-left"></i></Button>
        <PagePicture> 1/4 </PagePicture>
        <Button><i class="fa-solid fa-chevron-right"></i></Button>
      </CarouselApartment>
      <InformationContain>
        <div>
          <TitleApartment>{apartment.title}</TitleApartment>
          <LocationApartment>{apartment.location}</LocationApartment>
        </div>
        <ContaintProfile>
          <NameProfile>{apartment.host.name}</NameProfile>
          <AvatarProfile src={apartment.host.picture}/>
        </ContaintProfile>
      </InformationContain>
      <InformationContain>
        <ContaintTag>
          {apartment.tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </ContaintTag>
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
      </InformationContain>

      <WrapperCollapse>
        <Collapse title='Description' content={apartment.description}/>
        <Collapse title='Equipements' content={apartment.equipments}/>
      </WrapperCollapse>
    </div>
  )
}

export default Apartment
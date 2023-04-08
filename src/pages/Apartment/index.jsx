import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { apartmentList } from '../../datas/apartmentList'

const CarouselApartment = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
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
  max-height: 415px;
  object-fit: cover;
  border-radius: 25px;
`

const InformationContain = styled.section`
  display: flex;
  justify-content: space-between;
`

const AvatarProfile = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`


const WrapperCollapse = styled.div`
  display: flex;
  justify-content: space-between;
`

function Apartment() {
  const { id } = useParams()
  
  const apartment = apartmentList.find(id => id);
  console.log(apartment);
  
  return (
    <div>
      <h2 key={ id }>Apartment { id }</h2>
      <CarouselApartment>
        <PictureApartment src={apartment.cover}/>
        <button>Left</button>
        <button>Right</button>
      </CarouselApartment>
      <InformationContain>
        <div>
          <h2>{apartment.title}</h2>
          <p>Location</p>
          <div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
          </div>
        </div>
        <div>
          <span>Prenom</span>
          <span>Nom</span>
          <AvatarProfile />
        </div>
      </InformationContain>

      <WrapperCollapse>
        ContentCollapse
      </WrapperCollapse>
    </div>
  )
}

export default Apartment
import styled from 'styled-components'
import PhotoApartment from '../../assets/img-about.png'

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
  return (
    <div>Apartment
      <CarouselApartment>
        <PictureApartment src={PhotoApartment}/>
        <button>Left</button>
        <button>Right</button>
      </CarouselApartment>
      <InformationContain>
        <div>
          <h2>Title</h2>
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
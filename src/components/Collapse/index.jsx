import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const WrapperCollapse = styled.div`
  margin: 20px 0;
`

const TitleCollapse = styled.h2`
  background-color: ${colors.primary};
  color: #fff;
  cursor: pointer;
  padding: 18px;
  margin: 0px;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  border-radius: 5px;
`
const ContentCollapse = styled.div`
  display: block;
  color: ${colors.primary};
  padding: 18px;
  overflow: hidden;
  background-color: #f1f1f1;
  border-radius: 5px;
`

function Collapse() {
  const [isActive, setIsActive] = useState(false)
  return isActive ? (
    <div>
      <WrapperCollapse>
        <TitleCollapse onClick={() => setIsActive(false)}>
          Fiabilité
        </TitleCollapse>
        <ContentCollapse>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont 
          régulièrement vérifiées par nos équipes.
        </ContentCollapse>
      </WrapperCollapse>
      <WrapperCollapse>
        <TitleCollapse onClick={() => setIsActive(false)}>
          Respect
        </TitleCollapse>
        <ContentCollapse>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera 
          une exclusion de notre plateforme.
        </ContentCollapse>
      </WrapperCollapse>
      <WrapperCollapse>
        <TitleCollapse onClick={() => setIsActive(false)}>
          Service
        </TitleCollapse>
        <ContentCollapse>
          Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
          N'hésitez pas à nous contacter si vous avez la moindre question.
        </ContentCollapse>
      </WrapperCollapse>
      <WrapperCollapse>
        <TitleCollapse onClick={() => setIsActive(false)}>
          Sécurité
        </TitleCollapse>
        <ContentCollapse>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
          chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, 
          cela permet à nos équipes de vérifier que les standards sont bien respectés. 
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </ContentCollapse>
      </WrapperCollapse>
    </div>
  ) : (
    <div>
      <WrapperCollapse>
        <TitleCollapse onClick={() => setIsActive(true)}>
          Fiabilité
        </TitleCollapse>
      </WrapperCollapse>
      <WrapperCollapse>
        <TitleCollapse onClick={() => setIsActive(true)}>
          Respect
        </TitleCollapse>
      </WrapperCollapse>
      <WrapperCollapse>
        <TitleCollapse onClick={() => setIsActive(true)}>
          Service
        </TitleCollapse>
      </WrapperCollapse>
      <WrapperCollapse>
        <TitleCollapse onClick={() => setIsActive(true)}>
          Sécurité
        </TitleCollapse>
      </WrapperCollapse>
    </div>
  )
}

export default Collapse
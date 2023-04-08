import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useState } from 'react'

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

function Collapse(props) {
  const [isActive, setIsActive] = useState(false)

  const toggle = () => {
    setIsActive(!isActive);
  }

  return (
    <WrapperCollapse>
        <TitleCollapse onClick={toggle}>
          {props.title}
        </TitleCollapse>
        {isActive && (
            <ContentCollapse>
              {props.content}
            </ContentCollapse> 
        )}
    </WrapperCollapse>
  )
}

export default Collapse
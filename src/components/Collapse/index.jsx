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
  let ListContent = ""
  if(Array.isArray(props.content)){
    ListContent = props.content.map((content) => 
      <li>{content}</li>
    );
  }

  return (
    <WrapperCollapse>
      <TitleCollapse onClick={() => setIsActive(!isActive)}>
        {props.title}
      </TitleCollapse>
      {isActive && !Array.isArray(props.content) && (
        <ContentCollapse>
          {props.content}
        </ContentCollapse>
      )}
      {isActive && Array.isArray(props.content) && (
        <ContentCollapse>
          <ul>
            {ListContent}
          </ul>
        </ContentCollapse>
      )}
    </WrapperCollapse>
  )
}

export default Collapse
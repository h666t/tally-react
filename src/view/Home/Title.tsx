import React from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    background: #ebeff2;
`

type Props = {
  text: string
  prefix: string
}

const Title:React.FC<Props> = (props)=>{
  return (
    <TitleDiv>
      <span className={props.prefix}>
        {props.text}
      </span>
    </TitleDiv>
  )
}
export {Title}
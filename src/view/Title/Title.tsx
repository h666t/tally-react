import React from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
    border:1px solid red;
`

const Title:React.FC = ()=>{
  return (
    <TitleDiv>title</TitleDiv>
  )
}

export {Title}
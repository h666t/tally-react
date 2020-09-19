import React from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 20px;
    background: #ebeff2;
`

const Title:React.FC = ()=>{
  return (
    <TitleDiv>极简记账</TitleDiv>
  )
}
export {Title}
import React from 'react';
import styled from 'styled-components';

const CategorySelection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    line-height: 50px;
    
    span:nth-child(1){
      height: 62px;
      margin-right: 5px;
      position: relative;
      padding: 5px;
      &:after{
        position: absolute;
        left: 0;
        bottom:10px;
        width: 100%;
        content: '';
        border-bottom: 3px solid black;
      }
    }
    span:nth-child(2){
      margin-left: 5px;
    }
`

const Category:React.FC = ()=>{
  return (
    <CategorySelection>
      <span>支出</span>
      <span>收入</span>
    </CategorySelection>
  )
}

export {Category}
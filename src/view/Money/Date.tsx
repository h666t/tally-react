import React from 'react';
import styled from 'styled-components';

const DateWrapper = styled.div`
      display: flex;
      align-items: center;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 10px;
      background: white;
`

const Date:React.FC = ()=>{
  return (
    <DateWrapper>
      <span>日期：</span>
      <input type={'date'} value={'2020-09-10'}/>
    </DateWrapper>
  )
}

export {Date}
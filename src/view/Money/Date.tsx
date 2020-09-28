import React, {useContext, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {TextContext} from '../Money';

const DateWrapper = styled.div`
      display: flex;
      align-items: center;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 10px;
      background: white;
`

const Date:React.FC = ()=>{
  const {state,dispatch} = useContext(TextContext)
  const date = state.date
  const changeDate = (date: string) => {
    dispatch({type: 'changeDate',date:date})
  }
  const ref1 = useRef(null);
  const showDate = date.slice(0, 10);
  return (
    <DateWrapper>
      <span>日期：</span>
      <input ref={ref1}
             type={'date'}
             defaultValue={`${showDate}`}
             onChange={() => {
               changeDate((ref1.current! as HTMLInputElement).value);
             }}
      />
    </DateWrapper>
  )
}

export {Date}
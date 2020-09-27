import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {useDate} from '../../hook/useDate';

const DateWrapper = styled.div`
      display: flex;
      align-items: center;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 10px;
      background: white;
`


const Date:React.FC = ()=>{
  const {date,setDate} = useDate()
  const ref1 = useRef(null);
  const showDate = date.slice(0, 10);
  return (
    <DateWrapper>
      <span>日期：</span>
      <input ref={ref1}
             type={'date'}
             defaultValue={`${showDate}`}
             onChange={() => {
               setDate((ref1.current! as HTMLInputElement).value);
             }}
      />
    </DateWrapper>
  )
}

export {Date}
import React from 'react';
import styled from 'styled-components';
import {Line} from '../../components/Line';
import {Date} from './Date';
import {NumberPadOutput} from './NumberPadOutput';
import {Note} from './Note';
import {Calculator} from './Calculator';

const NumberPadWrapper = styled.div`
    > .numberPad{
      
    }
`

const NumberPad:React.FC = ()=>{
  return (
    <NumberPadWrapper>
      <Date/>
      <Line/>
      <NumberPadOutput/>
      <Line/>
      <Note/>
     <Calculator/>
    </NumberPadWrapper>
  )
}

export {NumberPad}
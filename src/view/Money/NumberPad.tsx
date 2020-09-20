import React from 'react';
import styled from 'styled-components';
import {Line} from '../../components/Line';
import {Date} from './Date';
import {NumberPadOutput} from './NumberPadOutput';
import {Note} from './Note';
import {Calculator} from './Calculator';



const NumberPad:React.FC = ()=>{
  return (
    <div>
      <Date  />
      <Line/>
      <NumberPadOutput/>
      <Line/>
      <Note/>
     <Calculator/>
    </div>
  )
}

export {NumberPad}
import React from 'react';
import styled from 'styled-components';

const NumberPadOutputWrapper = styled.div`
      padding-top: 8px;
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
      font-size: 36px;
      font-family: Consolas,monospace;
`

const NumberPadOutput:React.FC = ()=>{
  return (
    <NumberPadOutputWrapper>
      0
    </NumberPadOutputWrapper>
  )
}

export {NumberPadOutput}
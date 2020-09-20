import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    box-shadow:  0 1px 0 rgba(0,0,0,0.25);
    height: 2px;
`

const Line:React.FC = ()=>{
  return (
    <Div> </Div>
  )
}

export {Line}
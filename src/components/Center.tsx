import React from 'react';
import styled from 'styled-components';

const CenterSelection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
`

const Center:React.FC = (props)=>{
  return(
    <CenterSelection>
      {props.children}
    </CenterSelection>
  )
}

export {Center}
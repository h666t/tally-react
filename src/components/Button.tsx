import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    >button{
      font-size: 18px; border: none; padding: 8px 12px;
      background: #f60; border-radius: 4px;
      color: white;  
    }
`


const Button:React.FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
  const {children,...rest} = props
  return(
    <ButtonWrapper>
      <button {...rest}>
        {children}
      </button>
    </ButtonWrapper>

  )
}

export {Button}
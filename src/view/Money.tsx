import React, {useState} from 'react';
import {Category} from '../components/Category';
import {Tags} from './Money/Tags';
import styled from 'styled-components';
import {Calculator} from './Money/Calculator';

const MoneyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`

const Money:React.FC = () => {
  return (
      <MoneyWrapper>
        <div>
          <Category
          />
          <Tags/>
        </div>
        <Calculator/>
      </MoneyWrapper>
  )
}

export default Money
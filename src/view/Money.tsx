import React from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import {Category} from '../components/Category';
import {Tags} from './Money/Tags';
import {NumberPad} from './Money/NumberPad';
import styled from 'styled-components';

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
          <Category/>
          <Tags/>
        </div>
        <NumberPad/>
      </MoneyWrapper>
  )
}

export default Money
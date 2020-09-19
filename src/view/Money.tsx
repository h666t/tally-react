import React from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import {Category} from '../components/Category';
import {Tags} from './Money/Tags';
import {NumberPad} from './Money/NumberPad';

const Money:React.FC = () => {
  return (
      <div>
        <Category/>
        <Tags/>
        <NumberPad/>
      </div>
  )
}

export default Money
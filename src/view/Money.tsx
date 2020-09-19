import React from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import {Category} from '../components/Category';
import {Tags} from './Money/Tags';

const Money:React.FC = () => {
  return (
      <div>
        <Category/>
        <Tags/>
      </div>
  )
}

export default Money
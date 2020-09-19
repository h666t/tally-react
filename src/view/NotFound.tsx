import React from 'react';
import {Center} from '../components/Center';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {Space} from '../components/Space';



const NotFound:React.FC = ()=>{
  return (
    <div>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
          你找的页面不存在
          <NavLink to={'/'}>返回首页</NavLink>
      </Center>

    </div>

  )
}

export {NotFound}
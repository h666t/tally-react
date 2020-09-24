import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../components/Icon';
import {useHistory} from 'react-router-dom';
const TagListNavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ebeff2;
    padding: 12px 20px;
    >.TagListNav{
      font-size: 18px;
    }
    >.TagListBack{
      width: 20px;
      height: 20px;
    }
`
const PlaceHolder = styled.div`
  width: 20px;
  height: 20px;
`
const TagListNav = () => {
  const history = useHistory()
  return (
    <div>
      <TagListNavWrapper>
        <Icon id={'#left'} prefix={'TagListBack'} onClick={()=>{history.push('/Money')}}/>
        <span>标签详情</span>
        <PlaceHolder> </PlaceHolder>
      </TagListNavWrapper>
    </div>
  )
}

export {TagListNav}
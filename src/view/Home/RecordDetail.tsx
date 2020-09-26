import React from 'react';
import styled from 'styled-components';
import {RecordDetailList} from './RecordDetailList';

const Detail = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    >.title{
      font-weight: bold;
      font-size: 18px;
      padding-left: 20px;
      padding-bottom: 20px;
      >.input{
        span:nth-child(1){
          padding-right: 10px;
        }
        span:nth-child(2){
          padding-right: 20px;
        }
      }
      >.output{
        span:nth-child(1){
          padding-right: 10px;
        }
        span:nth-child(2){
          padding-right: 20px;
        }
      }
    }
`

const RecordDetail:React.FC = () => {
  return (
    <Detail>
      <div className={'title'}>
        <span className={'input'}>
          <span>今日支出</span>
          <span>￥12.00</span>
        </span>
        <span className={'output'}>
          <span>收入</span>
          <span>$0.00</span>
        </span>
      </div>
      <RecordDetailList/>
    </Detail>
  )
}

export {RecordDetail}
import React from 'react';
import styled from 'styled-components';
import {RecordDetailList} from './RecordDetailList';
import dayjs from 'dayjs';
import {fetchSpecialTimeAmount} from '../../lib/fetchSpecialTimeAmount';

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
  const today = dayjs().format('YYYY-MM-DD')
  const todayInput = fetchSpecialTimeAmount('+',today)
  const todayOutput = fetchSpecialTimeAmount('-',today)
  return (
    <Detail>
      <div className={'title'}>
        <span className={'input'}>
          <span>今日支出</span>
          <span>￥{todayOutput}</span>
        </span>
        <span className={'output'}>
          <span>收入</span>
          <span>￥{todayInput}</span>
        </span>
      </div>
      <RecordDetailList/>
    </Detail>
  )
}

export {RecordDetail}
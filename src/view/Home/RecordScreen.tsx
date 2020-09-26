import React from 'react';
import styled from 'styled-components';

const ScreenWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 20px;
   >div{
    display: flex;
    position: relative;
    height: 150px;
    justify-content: space-evenly;
    background: white;
    width: 80%;
    padding: 20px;
    border-radius: 15px;
    >.output{
      display: flex;
      flex-direction: column;
      span:nth-child(1){
        font-size: 14px;
        color: #9b9b9b;
      }
      span:nth-child(2){
        font-size: 22px;
      }
    }
    >.input{
      display: flex;
      flex-direction: column;
      span:nth-child(1){
        color: #9b9b9b;
        font-size: 14px;
      }
      span:nth-child(2){
        font-size: 22px;
      }
    }
    >.echart{
      position: absolute;
      bottom: 8%;
      left: 50%;
      transform: translateX(-50%);
      color: #0F9570;
     }
   }

`

const RecordScreen = () => {
  return (
    <ScreenWrapper>
      <div>
        <span className={'output'}>
        <span>本月支出</span>
        <span>￥12.00</span>
      </span>
        <span className={'input'}>
          <span>本月收入</span>
          <span>￥0.00</span>
      </span>
        <span className={'echart'}>查看图标分析</span>
      </div>
    </ScreenWrapper>
  )
}

export {RecordScreen}